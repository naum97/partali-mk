package com.anteski.partali.model.product_image_refs;

import com.anteski.partali.model.BaseEntity;
import com.anteski.partali.model.product.Product;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "product_image_refs")
@Getter
@Setter
@NoArgsConstructor
public class ProductImageRefs extends BaseEntity {
    @Column(name = "image_ref")
    private String imageReference;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;
}
