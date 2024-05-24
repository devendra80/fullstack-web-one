import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState({ name: '', salary: '' });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await axios.get('http://localhost:8080/employees');
    setEmployees(response.data);
  };

  const createEmployee = async (employee) => {
    const response = await axios.post('http://localhost:8080/employees', employee);
    setEmployees([...employees, response.data]);
    setCurrentEmployee({ name: '', salary: '' });
  };

  const updateEmployee = async (id, updatedEmployee) => {
    console.log('updatedEmployee : ' , updatedEmployee);
    const response = await axios.put(`http://localhost:8080/employees/${id}`, updatedEmployee);
    setEmployees(employees.map(emp => (emp.id === id ? response.data : emp)));
    setCurrentEmployee({ name: '', salary: '' });
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:8080/employees/${id}`);
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentEmployee.id) {
      updateEmployee(currentEmployee.id, currentEmployee);
    } else {
      createEmployee(currentEmployee);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentEmployee.name}
          onChange={(e) => setCurrentEmployee({ ...currentEmployee, name: e.target.value })}
          placeholder="Name"
          required
        />
        <input
          type="text"
          value={currentEmployee.salary}
          onChange={(e) => setCurrentEmployee({ ...currentEmployee, salary: e.target.value })}
          placeholder="Salary"
          required
        />
        <button type="submit">{currentEmployee.id ? 'Update' : 'Add'}</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.salary}</td>
              <td>
                <button onClick={() => setCurrentEmployee(employee)}>Edit</button>
                <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;