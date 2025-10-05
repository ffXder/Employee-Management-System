package com.ffxder.ems_backend.service.impl;

import com.ffxder.ems_backend.dto.EmployeeDto;
import com.ffxder.ems_backend.entity.Employee;
import com.ffxder.ems_backend.exception.ResourceNotFoundException;
import com.ffxder.ems_backend.mapper.EmployeeMapper;
import com.ffxder.ems_backend.repository.EmployeeRepository;
import com.ffxder.ems_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    // add employee by id
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = new EmployeeMapper().mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
    //get employee by id
    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = null;
        try {
            employee = employeeRepository.findById(employeeId)
                    .orElseThrow(() ->
                            new ResourceNotFoundException("Employee id does not exist: " + employeeId));
            return EmployeeMapper.mapToEmployeeDto(employee);

        } catch (ResourceNotFoundException e) {
            throw new RuntimeException(e);
        }
        
    }

    //get all employees
    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map((employee -> EmployeeMapper.mapToEmployeeDto(employee)))
                .collect(Collectors.toList());
    }

    // update employee
    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {

        try {
            Employee employee = employeeRepository.findById(employeeId)
                    .orElseThrow(() -> new ResourceNotFoundException("Employee id does not exist: " + employeeId));
            employee.setFirstName(updatedEmployee.getFirstName());
            employee.setLastName(updatedEmployee.getLastName());
            employee.setEmail(updatedEmployee.getEmail());

            Employee updatedEmployeeObj = employeeRepository.save(employee);

            return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);

        } catch (ResourceNotFoundException e) {
            throw new RuntimeException(e);
        }


    }


}
