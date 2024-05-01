package com.java.bdayparty.impl;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.java.bdayparty.dto.Request.ForgotPasswordRequest;
import com.java.bdayparty.dto.Request.LoginRequest;
import com.java.bdayparty.dto.Request.RegisterRequest;
import com.java.bdayparty.dto.Response.BasicsResponse;
import com.java.bdayparty.dto.Response.LoginResponse;
import com.java.bdayparty.model.Token;
import com.java.bdayparty.model.User;
import com.java.bdayparty.repository.TokenRepository;
import com.java.bdayparty.repository.UserRepository;
import com.java.bdayparty.service.AuthenticationService;
import com.java.bdayparty.utils.JwtUtil;

import lombok.RequiredArgsConstructor;
 

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenRepository tokenRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Override 
    public BasicsResponse<String> register(RegisterRequest registerRequest){
        Optional<User> isUserExsists=userRepository.findByEmail(registerRequest.getEmail());
        if(isUserExsists.isPresent())
        {
            return BasicsResponse.<String>builder()
            .message("user already exsists with email id "+registerRequest.getEmail())
            .data("").build();
        }
        var user = User.builder()
        .name(registerRequest.getName())
        .email(registerRequest.getEmail())
        .password(passwordEncoder.encode(registerRequest.getPassword())).build();
        userRepository.save(user);
        return BasicsResponse.<String>builder().message("user register successfully").data("").build();
    }

    @Override
    public BasicsResponse<LoginResponse> login(LoginRequest loginRequest){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        User user = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow(()-> new UsernameNotFoundException("User not found"));
                Map<String,Object> claims = new HashMap<>();
                claims.put("role",user.getRole().toString());
                String accessToken = jwtUtil.geneteToken(claims, user);
                String role = user.getRole().toString();
                revokeAllUserToken(user);
                saveUserToken(accessToken,user);
                return BasicsResponse.<LoginResponse>builder()
                      .message("Login Success")
                      .data(LoginResponse.builder().accessToken(accessToken.toString())
                      .role(role).build())
                      .build(); 
    }

    private void saveUserToken(String accessToken,User user)
    {
        var token = Token.builder().token(accessToken).user(user).expired(false).revoked(false).build();
        tokenRepository.save(token);

    }
    private void revokeAllUserToken(User user) {
        var validUserTokens = tokenRepository.findAllByUser_IdAndRevokedFalseAndExpiredFalse(user.getId());
        if (validUserTokens.isEmpty()) {
            return;
        }
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    @Override
    public BasicsResponse<String> forgotPassword(ForgotPasswordRequest forgotPasswordRequest) {
        var user = userRepository.findByEmail(forgotPasswordRequest.getEmail()).orElseThrow(() -> new UsernameNotFoundException("User not found") );
        if(!passwordEncoder.matches(forgotPasswordRequest.getCurrentPassword(),user.getPassword()))
        {
            return BasicsResponse.<String>builder().message("wrong password").data("").build();
        }
        if(!forgotPasswordRequest.getNewPassword().equals(forgotPasswordRequest.getConfirmPassword()))
        {
            return BasicsResponse.<String>builder().message("Password Mismatch").data("").build();
        }
        user.setPassword(passwordEncoder.encode(forgotPasswordRequest.getNewPassword()));
        userRepository.save(user);
        return BasicsResponse.<String>builder().message("Password updated successfully.").data("").build();
    }
    
}
