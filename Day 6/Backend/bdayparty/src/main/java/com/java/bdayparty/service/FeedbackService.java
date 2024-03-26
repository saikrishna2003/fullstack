package com.java.bdayparty.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.java.bdayparty.model.Feedback;

@Service
public interface FeedbackService {
    List<Feedback> getAllFeedbacks();
    Optional<Feedback> getFeedbackById(String feedbackId);
    Feedback createFeedback(Feedback feedback);

    
}
