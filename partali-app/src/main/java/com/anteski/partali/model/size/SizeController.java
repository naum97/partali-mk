package com.anteski.partali.model.size;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/sizes")
public class SizeController {

    @Autowired
    private SizeService sizeService;

    @GetMapping
    @CrossOrigin
    public List<String> getAllSizeNames(){
        return sizeService.getAllSizes();
    }

    @PostMapping(value = "/{name}")
    @CrossOrigin
    public Size addSize(@PathVariable String name){
        return sizeService.addSize(name);
    }
}
