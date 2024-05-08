import { ArrowLeftRight,Check,X } from "lucide-react";
import React from "react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
function Transfer() {
  const [employees, setEmployee] = useState([]);
  const [transfer, setTransfer] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [formData, setFormData] = useState({});
  const navigate=useNavigate();
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

  const handleChange = (event, id) => {
    const { name, value } = event.target;
    const updatedEmployees = employees.map(employee => {
        if (employee.id === id) {
            return { ...employee, [name]: value };
        }
        return employee;
    });
    setEmployee(updatedEmployees);
};

const handleTransfer = (uid)=>{
    setActiveId(uid);
   
}
const handleSubmit=(index)=>{
    console.log(employees[index]);
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
            const response = await fetch("http://localhost:5000/transfer", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
              },
              body:  JSON.stringify({id:employees[index].id,department: employees[index].department,position:employees[index].position,salary: employees[index].salary}),
            });
            const result = await response.json();
            Swal.fire({
              title: "Success!",
              text: "Data updated!",
              icon: "success",
            });
            if (result.status === "success") {
              navigate("/transfer");
              setTransfer(!transfer)
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
 
}
  return (
    <div className="m-9">
      <div className=" overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th className="px-6 py-3">S.No</th>
              <th scope="col" className="pl-16 py-3">
                Name
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
                {employees.map((employee, index) => {
                const imgUrl =
                    "http://localhost:5000/profileImage/image/" + employee.image;
                return (
                    <tr
                    key={index}
                    className="bg-white border-b   hover:bg-gray-50 -600"
                    >
                    <td className="px-6 py-4">{employee.id}.</td>
                    <th
                        scope="row"
                        className=" py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                        <div className="flex justify-start items-center ">
                        <img
                            className="h-9 mr-3 w-9 rounded-full "
                            src={imgUrl}
                        />
                        <div>{employee.name}</div>
                        </div>
                    </th>

                    <td className="px-6 py-4">
                        {activeId==employee.id&&transfer ? (
                            <div className="relative">
                        <select
                            defaultValue={employee?.department}
                            onChange={(e)=>{ 
                              handleChange(e,employee.id);
                            }}
                            name="department"
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state"
                            required
                        >
                            <option value="">Please select a department</option>
                            <option value="Database Administrator">
                            Database Administrator
                            </option>
                            <option value="Software Architect">
                            Software Architect
                            </option>
                            <option value="Web Developer">Web Developer</option>
                        </select><div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
                        ) : (
                        <div>{employee.department}</div>
                        )}
                    </td>
                    <td className="px-6 py-4">
                        {activeId==employee.id&&transfer ? (
                            <div className="relative">
                        <select
                            defaultValue={employee.position}
                            onChange={(e)=>{ 
                              handleChange(e,employee.id);
                            }}
                            name="department"
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state"
                            required
                        >
                            <option value="">Please select a position</option>
                <option value="Employee">Employee</option>
                <option value="Manager">Manager</option>
                <option value="Lead">Lead</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                        ) : (
                        <div>{employee.position}</div>
                        )}
                    </td>
                    <td className="px-6 py-4 flex mt-2">
                        ₹
                        {activeId==employee.id&&transfer?(
                        <input
                        type="text"
                        defaultValue={employee.salary}
                        name="salary"
                        onChange={(e)=>{ 
                          handleChange(e,employee.id);
                        }}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        />):(<div>{employee.salary}</div>)} 
                    
                    </td>
                    <td className="px-6 py-4">
                    {activeId==employee.id&&transfer?(<div className="flex space-x-4"><Check onClick={()=>handleSubmit(index)} className="bg-green-500 text-white w-12 h-7 rounded"  /><X onClick={()=>{  setTransfer(!transfer); handleTransfer(employee.id)}} className=" rounded w-12 h-7 text-white bg-red-500"/></div>
                       ):( <div className=" text-white items-center " onClick={()=>{  setTransfer(!transfer); handleTransfer(employee.id)}}>
                       <ArrowLeftRight
                           size={10}
                           className="rounded p-1 w-20 h-8 bg-green-500"
                       />
                       </div>)} 
                    </td>
                    </tr>
                );
                })}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transfer;
