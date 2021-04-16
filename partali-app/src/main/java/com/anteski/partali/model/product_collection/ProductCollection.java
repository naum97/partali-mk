package com.anteski.partali.model.product_collection;

import com.anteski.partali.model.BaseEntity;
import com.anteski.partali.model.color.Color;
import com.anteski.partali.model.product.Product;
import com.anteski.partali.model.size.Size;
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
@Table(name = "product_collection")
public class ProductCollection extends BaseEntity {

    @ManyToMany(mappedBy = "productCollections", targetEntity = Product.class)
    @JsonManagedReference
    private Set<Product> products = new LinkedHashSet<>();

    @Column(name = "collection")
    private String collection;

    @ManyToMany(cascade = CascadeType.ALL)
    @JsonManagedReference
    @JoinTable(
            name = "collection_colors",
            joinColumns = @JoinColumn(name = "collection_id"),
            inverseJoinColumns = @JoinColumn(name = "color_id")
    )
    private Set<Color> colors = new LinkedHashSet<>();

    @ManyToMany(cascade = CascadeType.ALL)
    @JsonManagedReference
    @JoinTable(
            name = "collection_sizes",
            joinColumns = @JoinColumn(name = "collection_id"),
            inverseJoinColumns = @JoinColumn(name = "size_id")
    )
    private Set<Size> sizes = new LinkedHashSet<>();
}
