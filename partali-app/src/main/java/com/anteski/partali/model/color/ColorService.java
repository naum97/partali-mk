package com.anteski.partali.model.color;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ColorService {

    @Autowired
    private ColorRepository colorRepository;

    public Color getColor(String color){
        return colorRepository.findByColor(color);
    }

    public List<String> getAllColors(){
        return colorRepository.findAllColorNames();
    }

    public Color addColor(String color){
        Color colorEntity = new Color();
        colorEntity.setColor(color);
        return colorRepository.save(colorEntity);
    }
}
