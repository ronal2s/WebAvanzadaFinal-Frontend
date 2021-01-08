package com.pucmm.notificacionesmicroservicio.data;

import lombok.Data;

@Data
public class Message {

    public String text;
    public String to;
    public String subject;


}
