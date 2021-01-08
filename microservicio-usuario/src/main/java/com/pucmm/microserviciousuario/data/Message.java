package com.pucmm.microserviciousuario.data;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Message {

    public String text;
    public String to;
    public String subject;


}
