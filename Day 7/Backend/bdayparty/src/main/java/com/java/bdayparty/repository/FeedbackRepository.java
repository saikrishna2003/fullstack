package com.java.bdayparty.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.bdayparty.model.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, String>{
    
}
