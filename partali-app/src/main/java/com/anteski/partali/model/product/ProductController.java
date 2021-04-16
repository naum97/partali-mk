package com.anteski.partali.model.product;

import com.anteski.partali.dto.product.ProductDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(params = "name")
    public Product getProductByName(@RequestParam String name){
        return productService.getProductByName(name);
    }

    @GetMapping(params = "id")
    @CrossOrigin
    public Product getProductById(@RequestParam Long id){
        return productService.getProductById(id);
    }

    @GetMapping
    public List<ProductDto> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping(params = "collection")
    public List<Product> getAllProductsInCollection(@RequestParam String collection){
        return productService.getAllProductsInCollection(collection);
    }

    @PostMapping(value = "/add-product", consumes = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin
    @ResponseBody
    public Product addProduct(@RequestBody ProductDto product){
        return productService.addProduct(product);
    }

    @DeleteMapping(params = "name")
    public void deleteProductByName(@RequestParam String name){
        productService.deleteProduct(name);
    }

    @DeleteMapping(params = "id")
    public void deleteProductById(@RequestParam Long id){
        productService.deleteProduct(id);
    }

    @DeleteMapping
    public void deleteAllProducts(){
        productService.deleteAllProducts();
    }
}
