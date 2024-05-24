package com.dev.springboot.service;

import com.dev.springboot.model.Employee;
import com.dev.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

  @Autowired
  EmployeeRepository employeeRepository;

  public List<Employee> getAllEmployees() {
    List<Employee> employees = new ArrayList<Employee>();
    employeeRepository.findAll().forEach(employee -> employees.add(employee));
    return employees;
  }

  public Optional<Employee> getEmployeeById(int id) {
    return employeeRepository.findById(id);
  }

  public Employee saveOrUpdate(Employee employee) {
    return employeeRepository.save(employee);
  }

  public void delete(int id) {
    employeeRepository.deleteById(id);
  }
}