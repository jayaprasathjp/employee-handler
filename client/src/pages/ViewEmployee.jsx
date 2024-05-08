import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Link } from "react-router-dom";

function ViewEmployee() {
  const [employee, setEmployee] = useState([]);
  const handleSearch = useDebouncedCallback(async (term) => {
    try {
      const response = await fetch(`http://localhost:5000/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ term: term }),
      });
      const result = await response.json();
      setEmployee(result);
    } catch (error) {
      console.log(error);
    }
  }, 300);
useEffect(() => {
  handleSearch("");
},[]);
  const handleDelete=async(id)=>{
    try {
      const response = await fetch(`http://localhost:5000/delete/${id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      setEmployee(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form className="max-w-md mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only "
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-cyan-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 outline-none"
            placeholder="Search Id,Name,Department,Position..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
      </form>
      <div>
        <div className=" justify-start items-center space-x-8 flex m-5 ">
          {employee.map((employee, index) => {
            const imgUrl =
              "http://localhost:5000/profileImage/image/" + employee.image;
            return (
              <div key={index} className="  grid grid-cols-3 grid-rows-3  max-w-sm h-48 w-72 bg-white border border-gray-200 rounded-2xl shadow-lg ">
                <div className=" col-span-1 bg-cyan-50 rounded-l-2xl row-span-2 flex justify-center items-center">
                  <img
                    className="w-20 h-20 rounded-full shadow-lg"
                    src={imgUrl}
                    alt="Profile image"
                  />
                </div>
                <div className=" col-span-2 p-2 rounded-r-2xl row-span-2 bg-cyan-50">
                  <h6 className=" text-lg font-medium text-gray-900 ">
                    #{employee.id}
                  </h6>
                  <h5 className=" text-xl font-medium text-gray-900 ">{employee.name}</h5>
                  <h5 className="text-base font-medium text-gray-900 ">
                  {employee.department}
                  </h5>
                  <span className="text-sm text-gray-500 ">
                  {employee.position}
                  </span>
                </div>
                <div className=" flex items-center justify-center col-span-3 rounded-b-lg ">
                <Link to={"/edit?id="+employee.id}> <button
                    type="button"
                    className="text-white bg-cyan-600 hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full  text-center me-2 mb-2 p-2"
                  ><Pencil size={16} />
                  </button></Link>
                    
                  <Link to={"/details?id="+employee.id}>
                  <button
                    type="button"
                    className="text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-full me-2 mb-2 p-2"
                  >
                    <Eye size={16} />
                  </button></Link>
                  <button
                  onClick={()=>{handleDelete(employee.id)}}
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-full me-2 mb-2 p-2"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ViewEmployee;
