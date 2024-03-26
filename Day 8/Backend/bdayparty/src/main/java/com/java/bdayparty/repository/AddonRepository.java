package com.java.bdayparty.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.bdayparty.model.Addon;

@Repository
public interface AddonRepository extends JpaRepository<Addon , String>{
    
}
