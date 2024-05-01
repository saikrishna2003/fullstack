package com.java.bdayparty.service;

import com.java.bdayparty.model.Order;
import java.util.List;

public interface OrderService {

    List<Order> getAllOrders();

    Order getOrderById(String id);

    Order createOrder(Order order);

    Order updateOrder(String id, Order order);

    void deleteOrder(String id);

    List<Order> getOrdersByEmail(String email);
}
