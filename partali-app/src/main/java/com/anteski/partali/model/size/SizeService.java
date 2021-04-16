package com.anteski.partali.model.size;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SizeService {

    @Autowired
    private SizeRepository sizeRepository;

    public Size getSize(String size){
        return sizeRepository.findBySize(size);
    }

    public List<String> getAllSizes(){
        return sizeRepository.findAllSizeNames();
    }

    public Size addSize(String size){
        Size sizeEntity = new Size();
        sizeEntity.setSize(size);
        return sizeRepository.save(sizeEntity);
    }
}
