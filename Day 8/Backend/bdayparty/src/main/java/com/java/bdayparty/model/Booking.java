package com.java.bdayparty.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name="_booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String bookingid;

    private String applicantName;

    private String address;

    private String mobileno;

    private Date date;

    @ManyToOne
    @JoinColumn(name="food_id")
    private FoodMenu foodmenu;

    @ManyToOne
    @JoinColumn(name="addon_id")
    private Addon addon;

    
}
