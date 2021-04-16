package com.anteski.partali.model.supplier;

import com.anteski.partali.dto.supplier.SupplierDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/suppliers")
@CrossOrigin
public class SupplierController {
    
    @Autowired
    private SupplierService supplierService;

    @PostMapping(value = "/{email}")
    public Supplier getSupplier(@PathVariable String email){
        return supplierService.getSupplierByEmailAddress(email);
    }

    @PostMapping(value = "/sign-up", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    @CrossOrigin
    public Supplier registerSupplier(@RequestBody Supplier supplier){
        return supplierService.addSupplier(supplier);
    }

    @PostMapping(value = "/add-supplier", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    @CrossOrigin
    public Supplier addSupplier(@RequestBody SupplierDTO supplierDTO) {
        return supplierService.addSupplier(supplierDTO);
    }

    @PostMapping(value = "/{id}")
    public Supplier getSupplier(@PathVariable Long id){
        return supplierService.getSupplierById(id);
    }

    @PostMapping
    public List<Supplier> getAllSuppliers(){
        return supplierService.getAllSuppliers();
    }

    @GetMapping(value = "/names")
    @CrossOrigin
    public List<String> getAllSupplierNames() {
        return supplierService.getAllSupplierNames();
    }

    @DeleteMapping(value = "/{id}")
    public void deleteSupplier(@PathVariable Long id){
        supplierService.deleteSupplier(supplierService.getSupplierById(id));
    }

    @DeleteMapping
    public void deleteAllSuppliers(){
        supplierService.deleteAllSuppliers();
    }
}
