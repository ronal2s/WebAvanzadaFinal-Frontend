package com.pucmm.notificacionesmicroservicio.controlador;

import com.pucmm.notificacionesmicroservicio.data.ClienteCompra;
import com.pucmm.notificacionesmicroservicio.data.Message;
import com.pucmm.notificacionesmicroservicio.service.mail.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/notifications")
public class NotificationController {

    @Autowired
    EmailService emailService;

    @PostMapping
    public String sendMail(@RequestBody ClienteCompra clienteCompra) {
        emailService.sendMail(String.format("¡Gracias por pedir!\n\nServicio de fotografos:\n\n1. paquete de %s", clienteCompra.client.namePaquete), "¡Gracias por comprar!", clienteCompra.client.email);

        clienteCompra.employees.
                forEach(r -> emailService.sendMail(String.format("¡Hola! %s,\nHay un trabajo pendiente del paquete %s", r.name, r.namePaquete), "Trabajo pendiente", r.email));
        return "Sent";
    }
    //Ruta que consume el api para mandar las notificaciones
    @PostMapping("/send")
    public String sendMailUser(@RequestBody Message message) {
        emailService.sendMail(message.text, message.subject, message.to);
        return "Sent";
    }
}
