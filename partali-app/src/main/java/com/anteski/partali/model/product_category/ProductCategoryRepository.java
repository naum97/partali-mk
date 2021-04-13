package com.anteski.partali.model.product_category;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductCategoryRepository extends CrudRepository<ProductCategory, Long> {
    ProductCategory findByCategory(Category category);

    List<ProductCategory> findAllByOrderByIdAsc();

    void deleteByCategory(Category category);
}
