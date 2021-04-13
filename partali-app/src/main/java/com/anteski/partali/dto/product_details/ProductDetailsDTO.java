package com.anteski.partali.dto.product_details;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductDetailsDTO {

    @JsonProperty(value = "color")
    private String color;

    @JsonProperty(value = "size")
    private String size;

    @JsonProperty(value = "stock")
    private Long stock;
}
