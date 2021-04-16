package com.anteski.partali.model.product;

import com.anteski.partali.model.product_collection.ProductCollection;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {

    Optional<Product> findByName(String name);

    Optional<List<Product>> findAllByOrderByIdAsc();

    Optional<List<Product>> findAllByProductCollectionsIn(Set<ProductCollection> productCollections);
}
