package com.pucmm.compradeeventos.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    public JwtTokenAuthFilter jwtTokenAuthFilter() {
        return new JwtTokenAuthFilter();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf()
                .disable()
                .addFilterBefore(jwtTokenAuthFilter(), UsernamePasswordAuthenticationFilter.class)
                .authorizeRequests()
//                .antMatchers("/users/auth/**").permitAll()
                .anyRequest()
                .authenticated();

        http.headers().frameOptions().disable();
    }
}
