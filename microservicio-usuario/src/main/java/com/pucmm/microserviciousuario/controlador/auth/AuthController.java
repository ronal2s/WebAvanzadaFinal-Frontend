package com.pucmm.microserviciousuario.controlador.auth;

import com.pucmm.microserviciousuario.data.Message;
import com.pucmm.microserviciousuario.data.User;
import com.pucmm.microserviciousuario.security.JwtTokenProvider;
import com.pucmm.microserviciousuario.security.UserPrincipal;
import com.pucmm.microserviciousuario.servicio.UserService;
import com.pucmm.microserviciousuario.utils.LoginRequest;
import com.pucmm.microserviciousuario.utils.LoginResponse;
import lombok.extern.java.Log;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/users/auth")
@Log
public class AuthController {

    @Autowired
    UserService userService;

    @Autowired
    PasswordEncoder passwordEncoder;

    public static final Logger LOG = LoggerFactory.getLogger(AuthController.class.getName());

    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManager authenticationManager;

    public AuthController(JwtTokenProvider jwtTokenProvider, AuthenticationManager authenticationManager) {
        this.jwtTokenProvider = jwtTokenProvider;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/signin")
    public LoginResponse generateToken(@RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.username, loginRequest.password));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserPrincipal user = (UserPrincipal) authentication.getPrincipal();
        return LoginResponse.response(jwtTokenProvider.generateToken(authentication), Long.toString(user.getId()));
    }

    @PostMapping("/signup")
    public User agregarUsuario(@RequestBody LoginRequest loginRequest) {
        User user = new User();
        user.name = loginRequest.name;
        user.email = loginRequest.email;
        user.username = loginRequest.username;
        user.password = passwordEncoder.encode(loginRequest.password);
        return userService.addUser(user, loginRequest.password);
    }
}
