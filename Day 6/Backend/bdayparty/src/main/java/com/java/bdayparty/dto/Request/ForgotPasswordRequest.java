package com.java.bdayparty.dto.Request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ForgotPasswordRequest {
    private String email;
    private String currentPassword;
    private String newPassword;
    private String confirmPassword;
    
}
