package com.pucmm.compradeeventos.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
public class ClienteCompra {

    public List<Client> employees;
    public Client client;
}
