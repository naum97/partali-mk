package com.anteski.partali.model.color;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ColorRepository extends CrudRepository<Color, Long> {
    String GET_ALL_COLOR_NAMES = "SELECT product_color FROM product_colors";
    Color findByColor(String color);

    @Query(value = GET_ALL_COLOR_NAMES, nativeQuery = true)
    List<String> findAllColorNames();
}
