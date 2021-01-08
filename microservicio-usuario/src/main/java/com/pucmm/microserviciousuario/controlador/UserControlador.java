package com.pucmm.microserviciousuario.controlador;


import com.pucmm.microserviciousuario.data.User;
import com.pucmm.microserviciousuario.servicio.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/users")
@RestController
public class UserControlador {

    @Autowired
    UserService userService;

    @GetMapping
    public List<User> getListaEstudiantes(@AuthenticationPrincipal Authentication authentication) {

        System.out.println((String) authentication.getPrincipal());
        return userService.getUsers();
    }

    @GetMapping("/fetch/user/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id);
    }

    @GetMapping("/fetch/users/{excludeId}")
    public List<User> getUsersExcludeId(@PathVariable Long excludeId) {
        return userService.getUsers()
                .stream()
                .filter(e -> !e.id.equals(excludeId))
                .collect(Collectors.toList());
    }
}
