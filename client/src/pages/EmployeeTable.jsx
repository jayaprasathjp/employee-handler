import React from 'react'
import { useEffect,useState } from 'react';
function EmployeeTable() {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
      async function fetchEmployee() {
        try {
          const response = await fetch(`http://localhost:5000/viewemployee`);
          const result = await response.json();
          setEmployee(result);
        } catch (error) {
          console.log(error);
        }
      }
  
      fetchEmployee();
    }, []);
    // console.log(employee);
  return (
    <div className="m-9">

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                    <th className="px-6 py-3">S.No</th>
                    <th scope="col" className="pl-16 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Department
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Position
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Salary(₹)
                    </th>
                    
                </tr>
            </thead>
            <tbody>
                {employee.map((employee,index)=>{
                                const imgUrl = "http://localhost:5000/profileImage/image/" + employee.image;
                    return (<tr key={index} className="bg-white border-b   hover:bg-gray-50 -600">
                    <td className="px-6 py-4">{employee.id}.</td>
                    <th scope="row" className=" py-4 font-medium text-gray-900 whitespace-nowrap" >
                        <div className='flex justify-center items-center '>
                        <img className='h-9 mr-3 w-9 rounded-full ' src={imgUrl}/>
                        <div>{employee.name}</div></div>
                    </th>
                    <td className="px-6 py-4">
                        {employee.email}
                    </td>
                    <td className="px-6 py-4">
                    {employee.department}
                    </td>
                    <td className="px-6 py-4">
                    {employee.position}
                    </td>
                    <td className="px-6 py-4">
                    ₹{employee.salary}
                    </td>
                   
                </tr>)})
                
}
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default EmployeeTable