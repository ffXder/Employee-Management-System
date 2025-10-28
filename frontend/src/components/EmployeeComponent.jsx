import React, {useState, useEffect} from 'react'
import { createEmployee, getEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const {id} = useParams();
    const [errors, setErrors] =useState({
        firstName: '',
        lastName: '',
        email: ''
    })
    
    const navigate = useNavigate();

    //This retrieve the information to the update page using useEffect
    useEffect(() => {
         
        if(!id) return;

        getEmployee(id).then((response) => {
           setFirstName(response.data.firstName);
           setLastName(response.data.lastName);
           setEmail(response.data.email); 
        }).catch(error => {
            console.error(error);
        })

    }, [id])

    //saveEmployee function
    function saveEmployee(e){
        e.preventDefault();
        
        //this will validate the employee before saving employee to the database
        if(validateForm()){
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

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        } else {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

  return (
    <div className='container'>
        <br /> <br />
        <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-2'>
            {
                pageTitle()
            }
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
                            className={`form-control ${ errors.firstName ? 'is-invalid': '' }`} //if firstname contains error it will display the error
                            onChange={(e) => setFirstName(e.target.value)}
                        >
                        </input>
                        {errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div>}

                    </div>

                    {/* lastName input */}
                    <div className='form-group mb-2'>
                        <label className='form-label'>LastName:</label>
                        <input
                            type ='text'
                            placeholder = 'Enter Employee Last Name'
                            name = 'lastName'
                            value = {lastName}
                            className={`form-control ${ errors.lastName ? 'is-invalid': '' }`}
                            onChange={(e) => setLastName(e.target.value)}
                        >
                        </input>
                        {errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>}

                    </div>

                    {/* email input */}
                    <div className='form-group mb-2'>
                        <label className='form-label'>Email:</label>
                        <input
                            type ='email'
                            placeholder = 'Enter Employee Email'
                            name = 'Email'
                            value = {email}
                            className={`form-control ${ errors.email ? 'is-invalid': '' }`}
                            onChange={(e) => setEmail(e.target.value)}
                        >
                        </input>
                        {errors.email && <div className='invalid-feedback'> {errors.email} </div>}

                    </div>

                    <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default EmployeeComponent