package com.java.bdayparty.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.bdayparty.model.Token;

public interface TokenRepository extends JpaRepository<Token, Long>{
    List<Token> findAllByUser_IdAndRevokedFalseAndExpiredFalse(Long long1);

    Optional<Token> findByToken(String token);
    
}
