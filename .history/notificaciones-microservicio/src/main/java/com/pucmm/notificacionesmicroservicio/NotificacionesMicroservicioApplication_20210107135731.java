package com.pucmm.notificacionesmicroservicio;
import lombok.extern.java.Log;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import java.util.Properties;

@EnableDiscoveryClient
@SpringBootApplication
@Log
public class NotificacionesMicroservicioApplication {

    public static void main(String[] args) {
        SpringApplication.run(NotificacionesMicroservicioApplication.class, args);
    }

    @Bean
    public JavaMailSender getJavaMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(25);

        mailSender.setUsername("ronal2w@gmail.com");
        mailSender.setPassword("59ROooe2W18911722");


        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", true);
        props.put("mail.debug", true);
        props.put("mail.smtp.starttls.enable", "true");

        return mailSender;
    }
}
