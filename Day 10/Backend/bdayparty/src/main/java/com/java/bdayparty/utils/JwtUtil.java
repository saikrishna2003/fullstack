package com.java.bdayparty.utils;

import java.security.Key;
import java.util.Date;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtUtil {
    @Value("${bdayparty.properties.secret_key}")
    private String key;

    @Value("${bdayparty.properties.expiration}")
    private long expiration_date;

    public String extractUsername(String token)
    {
       /*  throw new UnsupportedOperationException("Unimplemented method 'extractUsername")*/
       return extractClaim(token, Claims::getSubject);

    }

    private<T> T extractClaim(String token, Function<Claims,T> claimsResolver)
    {
        final Claims claims=extractAllClaims(token);
        return claimsResolver.apply(claims);        
    }
    private Claims extractAllClaims (String token)
    {
        return Jwts.parserBuilder().setSigningKey(getSigningKey()).build().parseClaimsJws(token).getBody();
    }


    private Key getSigningKey()
    {
        byte[] keyBytes=Decoders.BASE64.decode(key);
        return Keys.hmacShaKeyFor(keyBytes);
    }
    public boolean isTokenValid(String token,UserDetails userDetails)
    {
        final String username=extractUsername(token);
        return(username.equals(userDetails.getUsername()) && !isTokenExpired(token));

    }
    private boolean isTokenExpired(String token)
    {
        return extractExpiration(token).before(new Date());
    }
    private Date extractExpiration(String token)
    {
        return extractClaim(token, Claims::getExpiration);
    }
    public String geneteToken(Map<String,Object>claims,UserDetails userDetails)
    {
        return Jwts.builder()
        .setClaims(claims)
        .setSubject(userDetails.getUsername())
        .setIssuer("agrofund")
        .setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis()+ expiration_date))
        .signWith(getSigningKey(), SignatureAlgorithm.HS256)
        .compact();
    
    }
    
}
