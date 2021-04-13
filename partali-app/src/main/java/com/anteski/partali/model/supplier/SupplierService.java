package com.anteski.partali.model.supplier;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplierService {
    
    @Autowired
    private SupplierRepository supplierRepository;

    public List<Supplier> getAllSuppliers(){
        return supplierRepository.findAllByOrderByIdAsc();
    }

    public Supplier addSupplier(Supplier supplier){
        return supplierRepository.save(supplier);
    }

    public Supplier getSupplierById(Long id){
        return supplierRepository.findById(id).orElseThrow();
    }

    public Supplier getSupplierByEmailAddress(String email){
        return supplierRepository.findByEmailAddress(email);
    }

    public Supplier getSupplierByName(String name){
        return supplierRepository.findByName(name);
    }

    public void deleteSupplier(Supplier supplier){
        supplierRepository.delete(supplier);
    }

    public void deleteAllSuppliers(){
        supplierRepository.deleteAll();
    } 
}
