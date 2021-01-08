package com.pucmm.compradeeventos.data;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.util.List;
import java.util.Map;

@Data
@Getter
@Setter
public class Graphics {
    private Map<String, CompraMapper> data;
    private Integer cantPedidosPediente;
    private Integer cantPedidosRealizados;
}
