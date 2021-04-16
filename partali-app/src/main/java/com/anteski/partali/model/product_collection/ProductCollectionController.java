package com.anteski.partali.model.product_collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/collections")
@CrossOrigin
public class ProductCollectionController {

    @Autowired
    private ProductCollectionService productCollectionService;

    @PostMapping(value = "/{name}")
    @CrossOrigin
    public ProductCollection addProductCollection(@PathVariable String name){
        return productCollectionService.addProductCollection(name);
    }

    @GetMapping(value = "/{name}")
    @CrossOrigin
    public ProductCollection getProductCollection(@PathVariable String name){
        return productCollectionService.getProductCollectionByName(name);
    }

    @GetMapping
    public List<ProductCollection> getAllProductCategories(){
        return productCollectionService.getAllProductCollections();
    }

    @GetMapping(value = "/names")
    @CrossOrigin
    public List<String> getAllProductCategoriesNames(){
        return productCollectionService.getAllCollectionNames();
    }
}
