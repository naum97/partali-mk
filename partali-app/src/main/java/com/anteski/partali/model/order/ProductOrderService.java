package com.anteski.partali.model.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductOrderService {

    @Autowired
    private ProductOrderRepository productOrderRepository;

    protected ProductOrder getOrderByTrackingNumber(String trackingNumber){
        return productOrderRepository.findByTrackingNumber(trackingNumber);
    }

    protected List<ProductOrder> getAllOrders(){
        return productOrderRepository.findAllByOrderByIdAsc();
    }

    protected ProductOrder addOrder(ProductOrder productOrder){
        return productOrderRepository.save(productOrder);
    }

    protected void deleteOrder(ProductOrder productOrder){
        productOrderRepository.delete(productOrder);
    }

    protected void deleteOrder(String trackingNumber){
        productOrderRepository.deleteByTrackingNumber(trackingNumber);
    }

    protected void deleteAllOrders(){
        productOrderRepository.deleteAll();
    }
}
