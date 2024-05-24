package com.dev.springboot.controller;

import com.dev.springboot.model.Employee;
import com.dev.springboot.service.EmployeeService;
import com.dev.springboot.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

  @Autowired
  EmployeeService employeeService;

  //@GetMapping("/employees")
  @GetMapping(value="")
  private List<Employee> getAllEmployees() {
    return employeeService.getAllEmployees();
  }

  @GetMapping("/{id}")
  private Employee getEmployeeById(@PathVariable("id") int id) {
    Optional<Employee> employeeOptional = employeeService.getEmployeeById(id);
    if (!employeeOptional.isPresent()) {
        throw new ResourceNotFoundException("Employee not found with id " + id);
    }
    return employeeOptional.get();
  }

  //@PostMapping("/employees")
  @PostMapping("")
  private ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
    Employee emp = null;
    try{
      emp = employeeService.saveOrUpdate(employee);
    } catch (Exception exception) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return new ResponseEntity<>(emp, HttpStatus.CREATED);
  }

  @DeleteMapping("/{id}")
  private ResponseEntity<String> deleteById(@PathVariable("id") int id) {
    try{
      employeeService.delete(id);
    } catch (Exception exception) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
    return new ResponseEntity<>("Employee deleted with id: "+id, HttpStatus.OK);
  }

  @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable(value = "id") Long employeeId, 
    @RequestBody Employee employeeDetails) throws ResourceNotFoundException {
      Optional<Employee> employeeOptional = employeeService.getEmployeeById(employeeId.intValue());
      if (!employeeOptional.isPresent()) {
        throw new ResourceNotFoundException("Employee not found with id " + employeeId);
      }
      Employee employee = employeeOptional.get();                                  
      employee.setName(employeeDetails.getName());
      employee.setSalary(employeeDetails.getSalary());
      final Employee updatedEmployee = employeeService.saveOrUpdate(employee);
      return ResponseEntity.ok(updatedEmployee);
    }
          
@ExceptionHandler(ResourceNotFoundException.class)
public ResponseEntity<String> handleResourceNotFoundException(ResourceNotFoundException ex) {
    return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
}
}