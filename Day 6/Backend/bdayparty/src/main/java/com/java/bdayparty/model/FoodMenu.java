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
@Table(name="_foodmenu")
public class FoodMenu {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String foodMenuId;
    private String menuType;
    private String menuItems;
    private Double menuCost;
    
    
    
}
