package com.java.bdayparty.repository;

import com.java.bdayparty.model.Order;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, String> {
     @Query("SELECT o FROM Order o WHERE o.Orderemail = ?1")
    List<Order> findByOrderEmail(String orderEmail);
}
