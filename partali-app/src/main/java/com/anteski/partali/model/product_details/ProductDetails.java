package com.anteski.partali.model.product_details;

import com.anteski.partali.model.BaseEntity;
import com.anteski.partali.model.product.Product;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "product_details")
@Getter
@Setter
@NoArgsConstructor
public class ProductDetails extends BaseEntity {
    @Column(name = "color")
    private String color;

    @Column(name = "size")
    private String size;

    @Column(name = "stock")
    private Long stock;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    @JsonBackReference
    private Product product;

    public ProductDetails(String color, String size, Long stock){
        this.color = color;
        this.size = size;
        this.stock = stock;
    }
}
