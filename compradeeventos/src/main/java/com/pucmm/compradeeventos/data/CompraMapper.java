package com.pucmm.compradeeventos.data;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;

@Data
@AllArgsConstructor
public class CompraMapper {

    public String name;
    public Integer count;
}
