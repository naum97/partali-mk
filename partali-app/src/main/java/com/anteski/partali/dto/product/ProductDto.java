package com.anteski.partali.dto.product;

import com.anteski.partali.dto.product_details.ProductDetailsDTO;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@JsonSerialize
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {

    @JsonProperty(value = "id")
    private Long id;

    @JsonProperty(value = "name")
    private String name;

    @JsonProperty(value = "description")
    private String description;

    @JsonProperty(value = "price")
    private Long price;

    @JsonProperty(value = "collections")
    private List<String> collections;

    @JsonProperty(value = "amountInStock")
    private Long amountInStock;

    @JsonProperty(value = "supplierName")
    private String supplierName;

    @JsonProperty(value = "ribbon")
    private String ribbon;

    @JsonProperty(value = "care")
    private String care;

    @JsonProperty(value = "materials")
    private String materials;

    @JsonProperty(value = "productDetails")
    private List<ProductDetailsDTO> productDetails;

    @JsonProperty(value = "colors")
    private List<String> colors;

    @JsonProperty(value = "sizes")
    private List<String> sizes;

    public ProductDto(Long id, String name, Long price, Long amountInStock) {
        this.id = id;
        this.name = name;
        this.amountInStock = amountInStock;
        this.price = price;
    }
}
