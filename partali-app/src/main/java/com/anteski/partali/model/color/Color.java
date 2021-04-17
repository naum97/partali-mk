package com.anteski.partali.model.color;

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
@Table(name = "product_colors")
public class Color extends BaseEntity {

    @Column(name = "product_color", unique = true)
    private String color;

    @ManyToMany(mappedBy = "colors", targetEntity = ProductCollection.class)
    @JsonBackReference
    private Set<ProductCollection> productCollectionSet = new LinkedHashSet<>();

    public Color(String name) {
        this.setColor(name);
    }
}
