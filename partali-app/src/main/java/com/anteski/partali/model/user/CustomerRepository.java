package com.anteski.partali.model.user;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {

    List<Customer> findAllByOrderByIdAsc();

    Customer findByEmailAddress(String email);
}
