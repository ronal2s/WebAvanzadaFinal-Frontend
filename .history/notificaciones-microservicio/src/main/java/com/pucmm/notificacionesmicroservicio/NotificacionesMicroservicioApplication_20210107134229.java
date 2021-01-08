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
        // mailSender.setHost("smtp.gmail.com");
        // mailSender.setPort(587);

        mailSender.setUsername("ronal2w@outlook.com");
        mailSender.setPassword("59ROioo2W1891172");


        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.smtp.host", "smtp-mail.outlook.com");
        props.put("mail.smtp.port", "587");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.auth", "true");

        return mailSender;
    }
}
