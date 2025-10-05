package com.ffxder.ems_backend.service.impl;

import com.ffxder.ems_backend.dto.EmployeeDto;
import com.ffxder.ems_backend.entity.Employee;
import com.ffxder.ems_backend.exception.ResourceNotFoundException;
import com.ffxder.ems_backend.mapper.EmployeeMapper;
import com.ffxder.ems_backend.repository.EmployeeRepository;
import com.ffxder.ems_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = new EmployeeMapper().mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = null;
        try {
            employee = employeeRepository.findById(employeeId)
                    .orElseThrow(() ->
                            new ResourceNotFoundException("Employee does not exist: " + employeeId));
        } catch (ResourceNotFoundException e) {
            throw new RuntimeException(e);
        }
        return EmployeeMapper.mapToEmployeeDto(employee);
    }
}
