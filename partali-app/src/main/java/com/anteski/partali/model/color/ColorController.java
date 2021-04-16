package com.anteski.partali.model.color;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/colors")
public class ColorController {

    @Autowired
    private ColorService colorService;

    @GetMapping
    @CrossOrigin
    public List<String> getAllColorNames(){
        return colorService.getAllColors();
    }

    @PostMapping(value = "/{name}")
    @CrossOrigin
    public Color addColor(@PathVariable String name){
        return colorService.addColor(name);
    }
}
