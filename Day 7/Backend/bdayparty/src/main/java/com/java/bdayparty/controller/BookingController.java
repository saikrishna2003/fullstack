package com.java.bdayparty.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.java.bdayparty.model.Booking;
import com.java.bdayparty.service.BookingService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("bdayparty/api/v1/booking")
public class BookingController {

    private final BookingService bookingService;
    
     @GetMapping
    public ResponseEntity<List<Booking>> getAllBookings(){
        List<Booking> booking = bookingService.getAllBookings();
        return ResponseEntity.ok(booking);
    }

    @GetMapping("/{bookingid}")
    public ResponseEntity<Booking> getBookingById(@PathVariable String bookingid){

        Optional<Booking> booking = bookingService.getBookingById(bookingid);
        return booking.map(value -> ResponseEntity.ok().body(value))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping()
    public ResponseEntity<Booking> createBooking(@RequestBody Booking booking){
        Booking createBooking = bookingService.createBooking(booking);
        return ResponseEntity.status(HttpStatus.CREATED).body(createBooking);
    }

    @DeleteMapping("/{bookingid}")
    public ResponseEntity<String> deleteBooking(@PathVariable String bookingid){
        bookingService.deleteBooking(bookingid);
        return ResponseEntity.ok("Successfully deleted the Booking");
    }

    
}
