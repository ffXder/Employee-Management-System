import React from 'react'

const ListEmployeeComponents = () => {

    //adding dummy data
    const dummyData = [
        {
            "id": 1,
            "firstName": "Fred",
            "lastName": "James",
            "email": "fredjames@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Juan",
            "lastName": "James",
            "email": "juanjames@gmail.com"
        },
        {
            "id": 3,
            "firstName": "Lebron",
            "lastName": "James",
            "email": "lebronjames@gmail.com"
        }
    ]

  return (
    <div>
        <h2>List of Employess</h2>
        <table>
            <thead>
                <th>
                    <tr>
                        <th>Employee id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email address</th>
                    </tr>
                </th>
            </thead>
            <tbody>
                {
                    //calls the dummyData
                    dummyData.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }

            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponents