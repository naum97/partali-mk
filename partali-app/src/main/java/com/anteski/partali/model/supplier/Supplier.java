package com.anteski.partali.model.supplier;

import com.anteski.partali.model.BaseEntity;
import com.anteski.partali.model.product.Product;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.time.LocalDateTime;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "supplier")
@NoArgsConstructor
public class Supplier extends BaseEntity {

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "email", nullable = false)
    private String emailAddress;

    @Column(name = "registration_date", nullable = false)
    private LocalDateTime registrationDate;

    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    // todo: add json backed/managed
    @OneToMany(mappedBy = "supplier", orphanRemoval = true, targetEntity = Product.class)
            @JsonManagedReference
    Set<Product> products = new LinkedHashSet<>();
}
