package com.java.bdayparty.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="_feedback")
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String feedbackId;
    private String feedbackName;
    private String feedbackEmail;
    private String feedbackMessage;
    
}
