package com.pucmm.notificacionesmicroservicio.data;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Client {

    public String name;
    public String email;
    public Long paqueteId;
    public String namePaquete;
}

