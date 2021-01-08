package com.pucmm.compradeeventos.services;

import com.netflix.ribbon.proxy.annotation.Http;
import com.pucmm.compradeeventos.data.*;
import com.pucmm.compradeeventos.repository.CompraRepository;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
@Log
public class CompraService {

    @Autowired
    CompraRepository compraRepository;

    @Autowired
    RestTemplate restTemplate;

    public Optional<Compra> findById(Long id) {
        return compraRepository.findById(id);
    }

    public List<Compra> verComprasClientes(Long clientId) {
        return compraRepository.findAllByClientIdOrderByIdDesc(clientId);
    }

    public Compra agregarCompra(Compra compra) {
        if (compra != null && compra.id == null) {
            compra.asignarEmpleadoId = null;
            compra.creado = Instant.now();
            compraRepository.save(compra);
            return compra;
        }
        return null;
    }

    public User[] retrieveEmployee(Long excludeId) {
        return restTemplate.exchange(String.format("http://microservicio-usuario/users/fetch/users/%s", excludeId),
                HttpMethod.GET,
                null,
                User[].class)
                .getBody();

    }

    public User retrieveClient(Long id) {
        return restTemplate.exchange(String.format("http://microservicio-usuario/users/fetch/user/%s", id),
                HttpMethod.GET,
                null,
                User.class)
                .getBody();
    }


    public void sendNotification(ClienteCompra clienteCompra) {
        HttpEntity<ClienteCompra> requestBody = new HttpEntity<>(clienteCompra);
        restTemplate.exchange("http://microservicio-notificaciones/notifications",
                HttpMethod.POST,
                requestBody,
                String.class).getBody();
    }

    public Compra asignarCompraEmpleado(Long id, Long empleadoId) {
        Optional<Compra> compra = findById(id);
        if (compra.isPresent()) {
            if (compra.get().asignarEmpleadoId == null) {
                compra.get().asignarEmpleadoId = empleadoId;
                compraRepository.saveAndFlush(compra.get());
            }
        }
        return null;
    }

    public Graphics dataOrders() throws ParseException {
        Map<String, CompraMapper> COMPRAS = new HashMap<>();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        List<Compra> orders = compraRepository.findAll();
        List<CompraMapper> compraMappers = new ArrayList<>();


        for (Compra aux : orders) {
            Integer count = 1;
            Date date = format.parse("2020-03-28 00:00:00");
            Date date1 = format.parse("2020-03-28 23:59:59");

            if (aux.creado.toEpochMilli() >= date.toInstant().toEpochMilli() && aux.creado.toEpochMilli() <= date1.toInstant().toEpochMilli()) {
                if (COMPRAS.containsKey(aux.name)) {
                    CompraMapper compraMapper = COMPRAS.get(aux.name);
                    compraMapper.count = compraMapper.count + 1;
                    COMPRAS.remove(aux.name);
                    COMPRAS.put(aux.name, compraMapper);
                } else {
                    COMPRAS.put(aux.name, new CompraMapper(aux.name, count));
                }
            }
        }


        Graphics graphics = new Graphics();
        graphics.setData(COMPRAS);
        graphics.setCantPedidosPediente((int) orders.stream().filter(e -> e.asignarEmpleadoId == null).count());
        graphics.setCantPedidosRealizados((int) orders.stream().filter(e -> e.asignarEmpleadoId != null).count());


        return graphics;
    }
}
