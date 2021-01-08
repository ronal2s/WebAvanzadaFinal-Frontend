package com.pucmm.apigateway.resources;

import com.pucmm.apigateway.payload.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/test")
public class TestController {

    @Autowired
    RestTemplate restTemplate;

    @GetMapping
    public User[] test() {
        return restTemplate.exchange("http://microservicio-usuario/users",
                HttpMethod.GET,
                null,
                User[].class)
                .getBody();
    }
}
