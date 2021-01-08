package com.pucmm.compradeeventos.data;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Client {

    public String name;
    public String email;
    public Long paqueteId;
    public String namePaquete;

    public static Client toClient(User user, String namePaquete, Long paqueteId) {
        return new Client(user.name, user.email, paqueteId, namePaquete);
    }
}

