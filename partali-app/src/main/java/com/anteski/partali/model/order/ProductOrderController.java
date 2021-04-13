package com.anteski.partali.model.order;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class ProductOrderController {

    @Autowired
    private ProductOrderService productOrderService;

    @PostMapping(value = "/{tracking_number}")
    public ProductOrder getOrder(@PathVariable String tracking_number){
        return productOrderService.getOrderByTrackingNumber(tracking_number);
    }

    @PostMapping
    public List<ProductOrder> getAllOrders(){
        return productOrderService.getAllOrders();
    }

    @PostMapping(value = "/add-order",consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ProductOrder addOrder(@RequestBody ProductOrder productOrder){
        return productOrderService.addOrder(productOrder);
    }

    @DeleteMapping("/{tracking_number}")
    public void deleteOrder(@PathVariable String tracking_number){
        productOrderService.deleteOrder(tracking_number);
    }
}
