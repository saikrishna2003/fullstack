package com.java.bdayparty.dto.Response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class LoginResponse {
    @Builder.Default
    private String accessToken="";  
    private String role;  
}
