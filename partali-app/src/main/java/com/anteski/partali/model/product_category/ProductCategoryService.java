package com.anteski.partali.model.product_category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ProductCategoryService {

    @Autowired
    private ProductCategoryRepository productCategoryRepository;

    public ProductCategory addProductCategory(String name){
        ProductCategory category = new ProductCategory();
        category.setCategory(Category.valueOfIdentifier(name));
        return productCategoryRepository.save(category);
    }

    public ProductCategory getProductCategoryByName(String name){
        Category category = Category.valueOfIdentifier(name);
        return productCategoryRepository.findByCategory(category);
    }

    public List<ProductCategory> getAllCategories(){
        return productCategoryRepository.findAllByOrderByIdAsc();
    }

    public void deleteCategory(String name){
        Category category = Category.valueOfIdentifier(name);
        productCategoryRepository.deleteByCategory(category);
    }

    public void deleteAllCategories(){
        productCategoryRepository.deleteAll();
    }

    public Set<ProductCategory> getProductCategoriesFromList(List<String> collections) {
        return collections.stream().map(this::getProductCategoryByName).collect(Collectors.toSet());
    }
}
