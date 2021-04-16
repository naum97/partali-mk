package com.anteski.partali.model.supplier;

import com.anteski.partali.dto.supplier.SupplierDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
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

    public Supplier addSupplier(SupplierDTO supplierDTO) {
        Supplier supplier = new Supplier();
        supplier.setAddress(supplierDTO.getAddress());
        supplier.setName(supplierDTO.getName());
        supplier.setRegistrationDate(LocalDateTime.now());
        supplier.setPhoneNumber(supplierDTO.getPhoneNumber());
        supplier.setEmailAddress(supplierDTO.getEmail());
        return supplierRepository.save(supplier);
    }

    public List<String> getAllSupplierNames() {
        return supplierRepository.findAllSupplierNames();
    }
}
