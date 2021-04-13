package com.anteski.partali.model.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping(value = "/{email}")
    public Customer getUser(@PathVariable String email){
        return customerService.getCustomerByEmailAddress(email);
    }

    @PostMapping(value = "/sign-up")
    @ResponseBody
    public Customer registerUser(@RequestBody Customer customer){
        return customerService.addCustomer(customer);
    }

    @PostMapping(value = "/{id}")
    public Customer getUser(@PathVariable Long id){
        return customerService.getCustomerById(id);
    }

    @PostMapping
    public List<Customer> getAllUsers(){
        return customerService.getAllCustomers();
    }

    @DeleteMapping(value = "/{id}")
    public void deleteUser(@PathVariable Long id){
        customerService.deleteCustomer(customerService.getCustomerById(id));
    }

    @DeleteMapping
    public void deleteAllUsers(){
        customerService.deleteAllCustomers();
    }
}
