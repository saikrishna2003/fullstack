package com.java.bdayparty.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.java.bdayparty.model.Booking;

@Service
public interface BookingService {
    List<Booking> getAllBookings();
    Optional<Booking> getBookingById(String bookingid);
    Booking createBooking(Booking booking);
    Optional<Booking> updateBooking(String bookingid, Booking booking);
    void deleteBooking(String bookingid);
}
