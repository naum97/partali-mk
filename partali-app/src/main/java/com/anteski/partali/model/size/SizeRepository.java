package com.anteski.partali.model.size;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SizeRepository extends CrudRepository<Size, Long> {
    String GET_ALL_SIZE_NAMES= "SELECT product_size FROM product_sizes";

    @Query(value = GET_ALL_SIZE_NAMES, nativeQuery = true)
    List<String> findAllSizeNames();

    Size findBySize(String size);
}
