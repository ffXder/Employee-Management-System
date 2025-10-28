import React, {useState} from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const [errors, setErrors] =useState({
        firstName: '',
        lastName: '',
        email: ''
    })
    
    const navigate = useNavigate();

    //saveEmployee function
    function saveEmployee(e){
        e.preventDefault();
        
        //this will validate the employee before saving employee to the database
        if(validateForm){
            const employee = {firstName, lastName, email}
            console.log(employee)
    
            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigate('/employees')
            })
        }
    }

    //validate employee function
    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(firstName.trim()){
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required'
        }

        if(lastName.trim()){
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is required';
        }

        if(email.trim()){
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
        }

        setErrors(errorsCopy)

        return valid;
    }

  return (
    <div className='container'>
        <div className='card col-md-6 offset-md-3 offset-md-2'>
            <h2 className='text-center'>Add Employee</h2>
            <div className='card-body'>
                <form>
                    {/* firstName input */}
                    <div className='form-group mb-2'>
                        <label className='form-label'>First Name:</label>
                        <input
                            type ='text'
                            placeholder = 'Enter Employee First Name'
                            name = 'firstName'
                            value = {firstName}
                            className='form-control'
                            onChange={(e) => setFirstName(e.target.value)}
                        >
                        </input>
                    </div>
                    {/* lastName input */}
                    <div className='form-group mb-2'>
                        <label className='form-label'>LastName:</label>
                        <input
                            type ='text'
                            placeholder = 'Enter Employee Last Name'
                            name = 'lastName'
                            value = {lastName}
                            className='form-control'
                            onChange={(e) => setLastName(e.target.value)}
                        >
                        </input>
                    </div>
                    {/* email input */}
                    <div className='form-group mb-2'>
                        <label className='form-label'>Email:</label>
                        <input
                            type ='email'
                            placeholder = 'Enter Employee Email'
                            name = 'Email'
                            value = {email}
                            className='form-control'
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </input>
                    </div>

                    <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent