package com.anteski.partali.model.product_category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class ProductCategoryController {

    @Autowired
    private ProductCategoryService productCategoryService;

    @PostMapping
    public ProductCategory addProductCategory(@RequestParam String name){
        return productCategoryService.addProductCategory(name);
    }

    @GetMapping(value = "/{name}")
    public ProductCategory getProductCategory(@RequestParam String name){
        return productCategoryService.getProductCategoryByName(name);
    }

    @GetMapping
    public List<ProductCategory> getAllProductCategories(){
        return productCategoryService.getAllCategories();
    }
}
