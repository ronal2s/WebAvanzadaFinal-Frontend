package com.pucmm.compradeeventos.controlador;

import com.pucmm.compradeeventos.data.*;
import com.pucmm.compradeeventos.services.CompraService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.text.ParseException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/events")
@Log
public class CompraControlador {

    @Autowired
    CompraService compraService;

    @GetMapping("/{id}")
    public Compra verCompra(@PathVariable Long id) {
        Optional<Compra> compra = compraService.findById(id);

        if (compra.isPresent()) {
            return compra.get();
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/clients/{idCliente}")
    public List<Compra> verComprasClientes(@PathVariable Long idCliente) {
        return compraService.verComprasClientes(idCliente);
    }

    @GetMapping("/graphics")
    public Graphics seeGraphics() throws ParseException {
        return compraService.dataOrders();
    }

    @RequestMapping(value = "/tests", method = RequestMethod.GET)
    public String getUsers() {
        return "Prueba";
    }

    @PostMapping
    public Compra agregarCompra(@AuthenticationPrincipal Authentication authentication, @RequestBody Compra compra) {
        compra.clientId = Long.valueOf((String) authentication.getPrincipal());
        Compra compra1 = compraService.agregarCompra(compra);
        System.out.println("nuevoooo");
        if (compra1 != null) {
            log.info(compra1.name);
            User user = compraService.retrieveClient(compra.clientId);
            User[] employees = compraService.retrieveEmployee(compra1.clientId);
            ClienteCompra clienteCompra = new ClienteCompra(Arrays.stream(employees)
                    .map(e -> Client.toClient(e, compra1.name, compra1.paqueteId))
                    .collect(Collectors.toList()), Client.toClient(user, compra1.name, compra1.paqueteId));

            compraService.sendNotification(clienteCompra);
            return compra1;
        }

        throw new ResponseStatusException(HttpStatus.BAD_REQUEST);

    }

}
