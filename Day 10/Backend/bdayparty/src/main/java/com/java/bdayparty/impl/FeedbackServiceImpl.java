
package com.java.bdayparty.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.java.bdayparty.model.Feedback;
import com.java.bdayparty.repository.FeedbackRepository;
import com.java.bdayparty.service.FeedbackService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FeedbackServiceImpl implements FeedbackService{
    private final FeedbackRepository feedbackRepository;

    @Override
    public List<Feedback> getAllFeedbacks() {
       return feedbackRepository.findAll();
    }

    @Override
    public Optional<Feedback> getFeedbackById(String feedbackId) {
      return feedbackRepository.findById(feedbackId);
    }

    @Override
    public Feedback createFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
       
    }
    
    
}
