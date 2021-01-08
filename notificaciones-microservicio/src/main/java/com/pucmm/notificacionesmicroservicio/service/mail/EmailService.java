package com.pucmm.notificacionesmicroservicio.service.mail;

public interface EmailService {

    void sendMail(String text, String subject, String to);

    void sendMail(String text, String subject, String... to);
}
