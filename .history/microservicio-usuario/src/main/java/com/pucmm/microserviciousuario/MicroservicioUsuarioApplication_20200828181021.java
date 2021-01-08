package com.pucmm.microserviciousuario;

import com.pucmm.microserviciousuario.data.User;
import com.pucmm.microserviciousuario.servicio.UserService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;


@SpringBootApplication
@EnableDiscoveryClient
@Log
public class MicroservicioUsuarioApplication extends SpringBootServletInitializer {

    @Autowired
    UserService userService;
    @Autowired
    PasswordEncoder passwordEncoder;

    public static void main(String[] args) {
        SpringApplication.run(MicroservicioUsuarioApplication.class, args);
    }
    @PostConstruct
    /*
     * Inizializando la tarea de creacion de administrador
     * */
    public void createAdmin() {
        if (userService.findByUserName("admin") == null) {
            User user = new User();
            user.name = "Administrador";
            user.username = "admin";
            user.password = passwordEncoder.encode("admin");
            //El admin recibirá los trabajos a realizar
            user.email = "ronal2w@gmail.com";
            user.admin = true;
            userService.addUserAdmin(user);
        }
    }

    @Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }



}
