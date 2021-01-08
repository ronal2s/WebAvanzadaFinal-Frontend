package com.pucmm.microserviciousuario.servicio;

import com.pucmm.microserviciousuario.data.Message;
import com.pucmm.microserviciousuario.data.User;
import com.pucmm.microserviciousuario.repositorio.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    RestTemplate restTemplate;

    public User findById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public User findByUserName(String username) {
        return userRepository.findByUsername(username)
                .orElse(null);
    }

    public List<User> getUsers() {
        return userRepository.findAll(Sort.by(Sort.Order.desc("id")));
    }
    public User addUser(User user, String rawPassword) {
        if (user != null && user.id == null) {
            user.admin = false;
            userRepository.save(user);
            sendNotification(user, rawPassword);
            return user;
        }
        return null;
    }

    public User addUserAdmin(User user) {
        userRepository.save(user);
        return user;
    }
    //Notificacion de usuarios creados
    public void sendNotification(User user, String rawPassword) {
        HttpEntity<Message> messageHttpEntity = new HttpEntity<>(
                new Message(String.format("¡Hola %s!,\nGracias por registrarte al sistema de fotografía y videos\n\n CREDENCIALES: \n Contraseña: %s",
                        user.name, rawPassword), user.email, "Gracias por registar!"));

        restTemplate.exchange("http://microservicio-notificaciones/notifications/send",
                HttpMethod.POST,
                messageHttpEntity,
                String.class).getBody();
    }
}
