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
@Table(name="_addon")
public class Addon {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    
    private String AddonId;
    private String AddoName;
    private String AddonDes;
    private Double AddonPrice;
    
}
