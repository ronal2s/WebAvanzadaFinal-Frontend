package com.pucmm.compradeeventos.data;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.Instant;

@Data
@NoArgsConstructor
@Entity(name = "orders")
public class Compra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;
    @Column(name = "client_id")
    public Long clientId;
    @Column(name = "paquete_id")
    public Long paqueteId;
    @Column(name = "asignar_empleado_id")
    public Long asignarEmpleadoId;
    @Column
    public String name;
    public Instant creado;
}
