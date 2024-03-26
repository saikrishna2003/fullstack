package com.java.bdayparty.service;

import com.java.bdayparty.dto.Request.ForgotPasswordRequest;
import com.java.bdayparty.dto.Request.LoginRequest;
import com.java.bdayparty.dto.Request.RegisterRequest;
import com.java.bdayparty.dto.Response.BasicsResponse;
import com.java.bdayparty.dto.Response.LoginResponse;

public interface AuthenticationService {
     BasicsResponse<String> register(RegisterRequest registerRequest);

     BasicsResponse<LoginResponse> login(LoginRequest loginRequest);

    BasicsResponse<String> forgotPassword(ForgotPasswordRequest forgotPasswordRequest);

}
