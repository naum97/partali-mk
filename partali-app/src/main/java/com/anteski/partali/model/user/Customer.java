package com.anteski.partali.model.user;

import com.anteski.partali.model.BaseEntity;
import com.anteski.partali.model.order.ProductOrder;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "customer")
@NoArgsConstructor
public class Customer extends BaseEntity {

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "address")
    private String address;

    @Column(name = "email_address", nullable = false, unique = true)
    private String emailAddress;

    @Column(name = "date_of_birth", nullable = false)
    private LocalDate dateOfBirth;

    @Column(name = "phone", nullable = false)
    private String phoneNumber;

    // todo: figure out better way to handle passwords
    @Column(name = "password", nullable = false)
    private String password;

    // todo: add json backed/managed
    @OneToMany(mappedBy = "customer", orphanRemoval = true, targetEntity = ProductOrder.class)
            @JsonIgnore
    Set<ProductOrder> productOrders = new LinkedHashSet<>();

}
