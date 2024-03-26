package com.java.bdayparty;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.java.bdayparty.Enum.Role;
import com.java.bdayparty.model.User;
import com.java.bdayparty.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@SpringBootApplication
@RequiredArgsConstructor
public class BdaypartyApplication {
	private final PasswordEncoder passwordEncoder;


	public static void main(String[] args) {
		SpringApplication.run(BdaypartyApplication.class, args);
	}

	@SuppressWarnings("null")
	@Bean
	public CommandLineRunner commandLineRunner(UserRepository userRepository){
		return args -> {
			if(userRepository.count() > 0) return;
			var admin = User.builder()
						.name("Saikrishna")
						.email("sai123@gmail.com")
						.password(passwordEncoder.encode("sai@123"))
						.role(Role.ADMIN)
						.build();
			userRepository.save(admin);
		};
	}

}
