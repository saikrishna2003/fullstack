package com.java.bdayparty.impl;

import com.java.bdayparty.model.Order;
import com.java.bdayparty.repository.OrderRepository;
import com.java.bdayparty.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getOrdersByEmail(String email) {
        return orderRepository.findByOrderEmail(email);
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order getOrderById(String id) {
        return orderRepository.findById(id).orElse(null);
    }

    @Override
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public Order updateOrder(String id, Order order) {
        if (orderRepository.existsById(id)) {
            order.setOrderid(id);
            return orderRepository.save(order);
        }
        return null; // or throw an exception
    }

    @Override
    public void deleteOrder(String id) {
        orderRepository.deleteById(id);
    }
}
