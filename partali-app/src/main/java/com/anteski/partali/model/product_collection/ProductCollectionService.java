package com.anteski.partali.model.product_collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ProductCollectionService {

    @Autowired
    private ProductCollectionRepository productCollectionRepository;

    public ProductCollection addProductCollection(String name){
        ProductCollection collection = new ProductCollection();
        collection.setCollection(name);
        return productCollectionRepository.save(collection);
    }

    public ProductCollection getProductCollectionByName(String name){
        return productCollectionRepository.findByCollection(name);
    }

    public List<ProductCollection> getAllProductCollections(){
        return productCollectionRepository.findAllByOrderByIdAsc();
    }

    public void deleteProductCollection(String name){
        productCollectionRepository.deleteByCollection(name);
    }

    public void deleteAllProductCollections(){
        productCollectionRepository.deleteAll();
    }

    public Set<ProductCollection> getProductCollectionsFromList(List<String> collections) {
        return collections.stream().map(this::getProductCollectionByName).collect(Collectors.toSet());
    }

    public List<String> getAllCollectionNames() {
        return productCollectionRepository.findAllNames();
    }
}
