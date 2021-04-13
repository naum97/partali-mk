package com.anteski.partali.model.supplier;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SupplierRepository extends CrudRepository<Supplier, Long> {
    List<Supplier> findAllByOrderByIdAsc();

    Supplier findByEmailAddress(String email);

    Supplier findByName(String name);
}
