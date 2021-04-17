package com.anteski.partali.model.product;

import com.anteski.partali.model.BaseEntity;
import com.anteski.partali.model.product_collection.ProductCollection;
import com.anteski.partali.model.product_details.ProductDetails;
import com.anteski.partali.model.product_image_refs.ProductImageRefs;
import com.anteski.partali.model.product_review.ProductReview;
import com.anteski.partali.model.supplier.Supplier;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name = "product")
@NoArgsConstructor
public class Product extends BaseEntity {

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "price", nullable = false)
    private Long price;

    @Column(name = "amount_in_stock", nullable = false)
    private Long amountInStock = 0L;

    @Column(name = "care")
    private String care;

    @Column(name = "materials")
    private String materials;

    @ManyToOne
    @JoinColumn(name = "supplier_id", nullable = false)
    @JsonBackReference
    private Supplier supplier;

    @OneToMany(mappedBy = "product", targetEntity = ProductReview.class)
    Set<ProductReview> productReviews = new LinkedHashSet<>();

    @OneToMany(mappedBy = "product", targetEntity = ProductDetails.class, cascade = {CascadeType.ALL})
    @JsonManagedReference
    Set<ProductDetails> productDetails = new LinkedHashSet<>();

    // todo: might need to move this in product details if it makes more sense
    @OneToMany(mappedBy = "product", targetEntity = ProductImageRefs.class)
    Set<ProductImageRefs> productImageRefs = new LinkedHashSet<>();

    @ManyToMany(cascade = CascadeType.PERSIST)
    @JsonBackReference
    @JoinTable(
            name = "collection_product",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "collection_id")
    )
    private Set<ProductCollection> productCollections = new LinkedHashSet<>();

    public void setProductDetailsRelationship(ProductDetails productDetails){
        productDetails.setProduct(this);
        this.getProductDetails().add(productDetails);
    }
}
