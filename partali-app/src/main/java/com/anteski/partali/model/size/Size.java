package com.anteski.partali.model.size;

import com.anteski.partali.model.BaseEntity;
import com.anteski.partali.model.product_collection.ProductCollection;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "product_sizes")
public class Size extends BaseEntity {

    @Column(name = "product_size", unique = true)
    private String size;

    @ManyToMany(mappedBy = "sizes", targetEntity = ProductCollection.class)
    @JsonBackReference
    private Set<ProductCollection> productCollections = new LinkedHashSet<>();

    public Size(String size) {
        this.size = size;
    }
}
