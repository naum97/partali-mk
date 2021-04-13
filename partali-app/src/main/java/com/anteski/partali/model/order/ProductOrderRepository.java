package com.anteski.partali.model.order;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductOrderRepository extends CrudRepository<ProductOrder, Long> {
    ProductOrder findByTrackingNumber(String trackingNumber);

    List<ProductOrder> findAllByOrderByIdAsc();

    void deleteByTrackingNumber(String trackingNumber);
}
