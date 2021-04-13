package com.anteski.partali.model.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    protected List<Customer> getAllCustomers(){
        return customerRepository.findAllByOrderByIdAsc();
    }

    protected Customer addCustomer(Customer customer){
        return customerRepository.save(customer);
    }

    protected Customer getCustomerById(Long id){
        return customerRepository.findById(id).orElseThrow();
    }

    protected Customer getCustomerByEmailAddress(String email){
        return customerRepository.findByEmailAddress(email);
    }

    protected void deleteCustomer(Customer customer){
        customerRepository.delete(customer);
    }

    protected void deleteAllCustomers(){
        customerRepository.deleteAll();
    }
}
