package com.anteski.partali.model.order_item;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/order-items")
public class OrderItemController {

    @Autowired
    private OrderItemService orderItemService;

    @PostMapping(value = "/{id}")
    public OrderItem getOrder(@PathVariable Long id){
        return orderItemService.getOrderItemById(id);
    }

    @PostMapping
    public List<OrderItem> getAllOrders(){
        return orderItemService.getAllOrderItems();
    }

    @PostMapping(value = "/add-order-item")
    @ResponseBody
    public OrderItem addOrder(@RequestBody OrderItem orderItem){
        return orderItemService.addOrderItem(orderItem);
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id){
        orderItemService.deleteOrderItem(id);
    }
}
