package com.java.bdayparty.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.bdayparty.model.User;
import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long>{
    Optional<User> findByEmail(String name);
    
}
