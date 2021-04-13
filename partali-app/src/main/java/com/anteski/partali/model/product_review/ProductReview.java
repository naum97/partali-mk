package com.anteski.partali.model.product_review;

import com.anteski.partali.model.BaseEntity;
import com.anteski.partali.model.product.Product;
import com.anteski.partali.model.user.Customer;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "product_review")
@NoArgsConstructor
public class ProductReview extends BaseEntity {

    @Column(name = "timestamp", nullable = false)
    private LocalDateTime timestamp;

    @Column(name = "comment")
    private String comment;

    @Column(name = "image_ref")
    private String imageReference;

    @Enumerated(EnumType.STRING)
    @Column(name = "rating")
    private ProductRating productRating;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;
}
