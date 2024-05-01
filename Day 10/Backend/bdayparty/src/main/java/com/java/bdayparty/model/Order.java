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
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="_order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String Orderid;
    private String Orderusername;
    private String Orderemail;
    private String Ordergender;
    private String Ordermobileno;
    private String OrderAddon;
    private String OrderTheme;
    private String Orderaddress;



}
