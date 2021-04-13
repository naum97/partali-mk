package com.anteski.partali.model.order_item;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderItemService {
    
    @Autowired
    private OrderItemRepository orderItemItemRepository;


    protected List<OrderItem> getAllOrderItems(){
        return orderItemItemRepository.findAllByOrderByIdAsc();
    }

    protected OrderItem addOrderItem(OrderItem orderItem){
        return orderItemItemRepository.save(orderItem);
    }

    protected void deleteOrderItem(OrderItem orderItem){
        orderItemItemRepository.delete(orderItem);
    }

    protected void deleteOrderItem(Long id){
        orderItemItemRepository.deleteById(id);
    }

    protected void deleteAllOrderItems(){
        orderItemItemRepository.deleteAll();
    }

    protected OrderItem getOrderItemById(Long id) {
        return orderItemItemRepository.findById(id).orElseThrow();
    }
}
