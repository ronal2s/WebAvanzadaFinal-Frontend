package com.pucmm.microserviciousuario.utils;

import lombok.Data;

@Data
public class LoginRequest {

    public String name;
    public String email;
    public String username;
    public String password;
}
