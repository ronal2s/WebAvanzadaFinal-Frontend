package com.pucmm.microserviciousuario.security;

import com.pucmm.microserviciousuario.data.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtTokenProvider {

    public String generateToken(Authentication authentication) {
        Map<String, Object> USER = new HashMap<>();
        UserPrincipal userDetails = (UserPrincipal) authentication.getPrincipal();
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + 3600 * 1000);
        USER.put("user", userDetails);
        return Jwts.builder()
                .setSubject(Long.toString(userDetails.getId()))
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .addClaims(USER)
                .signWith(SignatureAlgorithm.HS512, "dfdkjfsldjfjdsfkjsdfksdkfjdsklfjksdj".getBytes())
                .compact();
    }
}
