package com.pucmm.compradeeventos.data;

import lombok.Data;

import java.io.Serializable;

@Data
public class User implements Serializable {
    public Long id;
    public String name;
    public String email;
    public boolean admin;
}

