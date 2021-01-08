package com.pucmm.microserviciousuario.security;

import com.pucmm.microserviciousuario.data.User;
import com.pucmm.microserviciousuario.servicio.UserService;
import lombok.extern.java.Log;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@Log
public class CustomUserDetails implements UserDetailsService {

    private final UserService userService;

    public CustomUserDetails(UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.info("entro por el servicio");
        User user = userService.findByUsername(username);
        return UserPrincipal.create(user);
    }
}
