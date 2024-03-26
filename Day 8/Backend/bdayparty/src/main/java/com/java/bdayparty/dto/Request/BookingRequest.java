package com.java.bdayparty.dto.Request;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class BookingRequest {

    private String applicantName;

    private String address;

    private String mobileno;

    private Date date;
    private String food_id;

    private String addon_id;


}
