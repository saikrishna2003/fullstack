package com.java.bdayparty.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.bdayparty.model.Booking;
@Repository
public interface BookingRepository extends JpaRepository<Booking,String>{
    
}
