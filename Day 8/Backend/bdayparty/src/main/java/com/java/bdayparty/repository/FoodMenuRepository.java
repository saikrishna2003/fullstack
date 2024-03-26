package com.java.bdayparty.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.bdayparty.model.FoodMenu;

@Repository
public interface FoodMenuRepository  extends JpaRepository<FoodMenu , String>{
    
}