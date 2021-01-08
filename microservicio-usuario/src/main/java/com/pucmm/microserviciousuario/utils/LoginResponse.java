package com.pucmm.microserviciousuario.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor

public class LoginResponse {

    private String accessToken;
    private String userId;

    public static LoginResponse response(String accessToken, String userId) {
        return new LoginResponse(accessToken, userId);
    }
}
