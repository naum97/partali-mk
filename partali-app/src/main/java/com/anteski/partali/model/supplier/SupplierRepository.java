package com.anteski.partali.model.supplier;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface SupplierRepository extends CrudRepository<Supplier, Long> {
    String GET_SUPPLIER_NAMES = "SELECT name FROM supplier";

    @Query(value = GET_SUPPLIER_NAMES, nativeQuery = true)
    List<String> findAllSupplierNames();

    List<Supplier> findAllByOrderByIdAsc();

    Supplier findByEmailAddress(String email);

    Supplier findByName(String name);
}
