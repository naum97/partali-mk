package com.anteski.partali.model.product_collection;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductCollectionRepository extends CrudRepository<ProductCollection, Long> {
    String GET_PRODUCT_COLLECTION_NAMES = "SELECT collection FROM product_collection";

    ProductCollection findByCollection(String collection);

    List<ProductCollection> findAllByOrderByIdAsc();

    void deleteByCollection(String collection);

    @Query(value = GET_PRODUCT_COLLECTION_NAMES, nativeQuery = true)
    List<String> findAllNames();}
