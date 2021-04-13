package com.anteski.partali.model.order_item;

import com.anteski.partali.model.BaseEntity;
import com.anteski.partali.model.order.ProductOrder;
import com.anteski.partali.model.product.Product;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "order_item")
@NoArgsConstructor
public class OrderItem extends BaseEntity {

    @Column(name = "price", nullable = false)
    private Long price;

    @Column(name = "amount", nullable = false)
    private Long amount;

    @ManyToOne
    @JoinColumn(name = "product_order_id", nullable = false)
    private ProductOrder productOrder;

    @OneToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;
}
