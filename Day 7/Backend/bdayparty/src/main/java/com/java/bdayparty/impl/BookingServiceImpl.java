    package com.java.bdayparty.impl;

    import java.util.List;
    import java.util.Optional;

    import org.springframework.stereotype.Service;
    import com.java.bdayparty.model.Booking;
    import com.java.bdayparty.repository.BookingRepository;
    import com.java.bdayparty.service.BookingService;

    import lombok.RequiredArgsConstructor;
    @Service
    @RequiredArgsConstructor
    public class BookingServiceImpl implements BookingService {
        
        private final BookingRepository bookingRepository;

        @Override
        public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
        }

        @Override
        public Optional<Booking> getBookingById(String bookingid) {
        return bookingRepository.findById(bookingid);
        }

        @Override
        public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
        }


        @Override
        public void deleteBooking(String bookingid) {
        bookingRepository.deleteById(bookingid);
        
    }

        @Override
        public Optional<Booking> updateBooking(String bookingid, Booking booking) {
            // TODO Auto-generated method stub
            throw new UnsupportedOperationException("Unimplemented method 'updateBooking'");
        }
    }
