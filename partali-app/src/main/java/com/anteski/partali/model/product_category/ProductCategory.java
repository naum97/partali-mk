package com.anteski.partali.model.product_category;

import com.anteski.partali.model.BaseEntity;
import com.anteski.partali.model.product.Product;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "product_category")
public class ProductCategory extends BaseEntity {

    @ManyToMany(mappedBy = "productCategories", targetEntity = Product.class)
    @JsonManagedReference
    private Set<Product> products = new LinkedHashSet<>();

    @Enumerated(value = EnumType.STRING)
    @Column(name = "category")
    private Category category;
}
