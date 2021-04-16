package com.anteski.partali.model.order;

import com.anteski.partali.model.BaseEntity;
import com.anteski.partali.model.order_item.OrderItem;
import com.anteski.partali.model.user.Customer;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Setter
@Table(name = "product_order")
@NoArgsConstructor
public class ProductOrder extends BaseEntity {

    @Column(name = "tracking_number", nullable = false)
    @Getter private String trackingNumber;

    @Column(name = "shipping_address", nullable = false)
    @Getter private String shippingAddress;

    @Column(name = "billing_address", nullable = false)
    @Getter private String billingAddress;

    @Column(name = "timestamp", nullable = false)
    @Getter private LocalDateTime timestamp;

    @Column(name = "price", nullable = false)
    @Getter private Long price;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @OneToMany(targetEntity = OrderItem.class, mappedBy = "productOrder")
    Set<OrderItem> orderItems = new HashSet<>();
}
