import React from 'react'
import {Undo2} from 'lucide-react';
import { useEffect,useState } from 'react';
import Swal from 'sweetalert2';
function Revert() {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
      async function fetchEmployee() {
        try {
          const response = await fetch(`http://localhost:5000/revert`);
          const result = await response.json();
          setEmployee(result);
        } catch (error) {
          console.log(error);
        }
      }
  
      fetchEmployee();
    }, []);
    const handleRevert=async(id)=>{
        Swal.fire({
          title: "Are you sure?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              const response = await fetch(`http://localhost:5000/revert/${id}`, {
            method: 'DELETE'
          });
          const result = await response.json();
          setEmployee(result);
              Swal.fire({
                title: "Success!",
                text: "Employee Reverted!",
                icon: "success",
              });
            } catch (error) {
              console.log(error);
            }
          }
        });
      }
    // console.log(employee);
  return (
    <div className="m-9">

<div className="font-bold text-xl mb-3 text-cyan-500">EX-EMPLOYEE LIST</div>
    <div className=" overflow-x-auto shadow-md sm:rounded-lg">
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
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                    
                </tr>
            </thead>
            <tbody>
                {employee&&employee.map((employee,index)=>{
                                const imgUrl = "http://localhost:5000/profileImage/image/" + employee.image;
                    return (<tr key={index} className="bg-white border-b   hover:bg-gray-50 -600">
                    <th className="px-6 py-4">{employee.id}.</th>
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
                    <td className="px-6 py-4"> <div className=" text-white items-center ">
                       <button onClick={()=>{handleRevert(employee.id)}}><Undo2 
                           size={10}
                           className="rounded p-1 w-20 h-8 bg-yellow-500"
                       /></button>
                       </div>
                    </td>
                </tr>)})
                

}
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Revert;