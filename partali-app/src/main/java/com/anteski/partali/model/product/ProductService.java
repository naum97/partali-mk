package com.anteski.partali.model.product;

import com.anteski.partali.dto.product.ProductDto;
import com.anteski.partali.dto.product_details.ProductDetailsDTO;
import com.anteski.partali.model.color.Color;
import com.anteski.partali.model.color.ColorService;
import com.anteski.partali.model.product_collection.ProductCollection;
import com.anteski.partali.model.product_collection.ProductCollectionService;
import com.anteski.partali.model.product_details.ProductDetails;
import com.anteski.partali.model.size.Size;
import com.anteski.partali.model.size.SizeService;
import com.anteski.partali.model.supplier.Supplier;
import com.anteski.partali.model.supplier.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private SupplierService supplierService;

    @Autowired
    private ColorService colorService;

    @Autowired
    private SizeService sizeService;

    @Autowired
    private ProductCollectionService productCollectionService;

    protected List<Product> getAllProductsInCollection(String collection){
        ProductCollection productCollection = productCollectionService.getProductCollectionByName(collection);
        return productRepository.findAllByProductCollectionsIn(Collections.singleton(productCollection)).orElseThrow();
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

    //todo: add relationship between color size and collection
    public Product addProduct(ProductDto productDto) {

        // initialize product entity from productDTO request from front-end
        Product productEntity = initializeProduct(productDto);

        // get product collections entities -> these will be guaranteed to exist as the dropdown list will be populated
        // from the database on load of front-end
        Set<ProductCollection> productCollectionSet = productCollectionService.getProductCollectionsFromList(productDto.getCollections());
        productEntity.setProductCollections(productCollectionSet);

        // as above -> supplier must exists already
        Supplier supplier = supplierService.getSupplierByName(productDto.getSupplierName());
        productEntity.setSupplier(supplier);

        List<ProductDetailsDTO> productDetails = productDto.getProductDetails();

        // iterate through product details
        for(ProductDetailsDTO productDetailsDTO : productDetails){

            ProductDetails productDetailsEntity = initializeProductDetails(productDetailsDTO);

            // attach ProductDetails to Product
            productEntity.setAmountInStock(productEntity.getAmountInStock() + productDetailsDTO.getStock());
            productEntity.setProductDetailsRelationship(productDetailsEntity);


            setSizeAndColorInCollections(productCollectionSet,
                    productDetailsEntity.getColor(),
                    productDetailsEntity.getSize()
            );
        }

        return productRepository.save(productEntity);
    }

    private Product initializeProduct(ProductDto productDto) {
        Product productEntity = new Product();
        productEntity.setPrice(productDto.getPrice());
        productEntity.setDescription(productDto.getDescription());
        productEntity.setName(productDto.getName());
        productEntity.setCare(productDto.getCare());
        productEntity.setMaterials(productDto.getMaterials());
        return productEntity;
    }

    private ProductDetails initializeProductDetails(ProductDetailsDTO productDetailsDTO){
        return new ProductDetails(
                productDetailsDTO.getColor().toLowerCase(),
                productDetailsDTO.getSize().toUpperCase(),
                productDetailsDTO.getStock()
        );



    }

    private void setSizeAndColorInCollections(Set<ProductCollection> productCollectionSet, String colorName, String sizeName) {

        Map<String, Color> tempColorMap = new HashMap<>();
        Map<String, Size>  tempSizeMap = new HashMap<>();
        for(ProductCollection collection: productCollectionSet){

            // get color if exists, if not create new one
            // searches in this order:
            // 1. in colors associated with current collection
            // 2. in color table in database
            // 3. in tempColorMap -> used when adding new color
            Color colorEntity = collection.getColors().stream()
                    .filter(color -> color.getColor().equalsIgnoreCase(colorName))
                    .findFirst()
                    .orElse(colorService.getColor(colorName)
                            .orElse(tempColorMap.get(colorName)));

            if(colorEntity == null){
                colorEntity = new Color(colorName);
            }

            // get size if exists, if not create new one
            Size sizeEntity = collection.getSizes().stream()
                    .filter(size -> size.getSize().equalsIgnoreCase(sizeName))
                    .findFirst()
                    .orElse(sizeService.getSize(sizeName)
                            .orElse(tempSizeMap.get(sizeName)));

            if(sizeEntity == null){
                sizeEntity = new Size(sizeName);
            }

            collection.setColorAndSizeRelationship(colorEntity, sizeEntity);
            tempColorMap.put(colorName, colorEntity);
            tempSizeMap.put(sizeName, sizeEntity);
        }
    }
}
