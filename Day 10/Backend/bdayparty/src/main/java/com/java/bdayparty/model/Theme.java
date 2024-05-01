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
@Table(name="_theme")
public class Theme {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String themeid;
    private String themename; 
    private String themeimage;
    private String themedes;
    private Double themecost; 
}
