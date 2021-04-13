package com.anteski.partali.model.product;

import com.anteski.partali.dto.product.ProductDto;
import com.anteski.partali.dto.product_details.ProductDetailsDTO;
import com.anteski.partali.model.product_category.ProductCategory;
import com.anteski.partali.model.product_category.ProductCategoryService;
import com.anteski.partali.model.product_details.ProductDetails;
import com.anteski.partali.model.supplier.Supplier;
import com.anteski.partali.model.supplier.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private SupplierService supplierService;

    @Autowired
    private ProductCategoryService productCategoryService;

    protected List<Product> getAllProductsInCategory(String category){
        ProductCategory productCategory = productCategoryService.getProductCategoryByName(category);
        return productRepository.findAllByProductCategoriesIn(Collections.singleton(productCategory)).orElseThrow();
    }

    protected Product getProductById(Long id){
        return productRepository.findById(id).orElseThrow();
    }

    protected Product getProductByName(String name){
        return productRepository.findByName(name).orElseThrow();
    }

    protected Product addProduct(Product product){
        return productRepository.save(product);
    }

    protected void deleteProduct(String name){
        productRepository.findByName(name).ifPresent(product -> productRepository.delete(product));
    }

    protected void deleteProduct(Long id){
        productRepository.findById(id).ifPresent(product -> productRepository.delete(product));
    }

    protected void deleteAllProducts(){
        productRepository.deleteAll();
    }

    public List<ProductDto> getAllProducts() {
        List<Product> productEntities = productRepository.findAllByOrderByIdAsc().orElseThrow();
        List<ProductDto> productDTOS = new ArrayList<>();
        for(Product productEntity : productEntities){
            ProductDto productDto = new ProductDto(
                    productEntity.getId(),
                    productEntity.getName(),
                    productEntity.getPrice(),
                    productEntity.getAmountInStock()
            );
            productDTOS.add(productDto);
        }
        return productDTOS;
    }

    public Product addProduct(ProductDto productDto) {
        Product productEntity = new Product();
        productEntity.setPrice(productDto.getPrice());
        productEntity.setDescription(productDto.getDescription());
        productEntity.setName(productDto.getName());

        Set<ProductCategory> productCategorySet = productCategoryService.getProductCategoriesFromList(productDto.getCollections());
        productEntity.setProductCategoryRelationship(productCategorySet);

        Supplier supplier = supplierService.getSupplierByName(productDto.getSupplierName());
        productEntity.setSupplier(supplier);


        for(ProductDetailsDTO productDetailsDTO : productDto.getProductDetails()){
            ProductDetails productDetailsEntity = new ProductDetails();
            productDetailsEntity.setColor(productDetailsDTO.getColor());
            productDetailsEntity.setSize(productDetailsDTO.getSize());
            productDetailsEntity.setStock(productDetailsDTO.getStock());
            productEntity.setAmountInStock(productEntity.getAmountInStock() + productDetailsDTO.getStock());
            productEntity.setProductDetailsRelationship(productDetailsEntity);
        }

        return productRepository.save(productEntity);
    }
}
