package com.pucmm.apigateway.payload;

import lombok.Data;

import java.io.Serializable;

@Data
public class User implements Serializable {
    public Long id;
    public String name;
    public boolean admin;
}
