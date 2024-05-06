import React from 'react'

function EmployeeTable() {
  return (
    <div className="m-9">

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                <tr>
                    <th className="px-6 py-3">S.No</th>
                    <th scope="col" className="px-6 py-3">
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
                <tr className="bg-white border-b   hover:bg-gray-50 -600">
                    <td className="px-6 py-4">1.</td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" >
                        Ram
                    </th>
                    <td className="px-6 py-4">
                        ram@gmail.com
                    </td>
                    <td className="px-6 py-4">
                        HOD
                    </td>
                    <td className="px-6 py-4">
                        Assistant
                    </td>
                    <td className="px-6 py-4">
                        ₹2999
                    </td>
                    <td className="px-6 py-4 text-right">
                        <a href="#" className="font-medium text-blue-600  hover:underline">Edit</a>
                    </td>
                </tr>
                
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default EmployeeTable