import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function AddEmployee() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    department: "",
    position: "",
    address: "",
    email: "",
    phone: "",
    image: "",
    salary: "",
    city: "",
    state: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finaldata = new FormData();
    for (let key in formData) {
      finaldata.append(key, formData[key]);
    }
    // console.log(formData);
    // console.log(e.target.position.value);
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
          const response = await fetch("http://localhost:5000/addemployee", {
            method: "POST",
            body: finaldata,
          });
          const result = await response.json();
          Swal.fire({
            title: "Success!",
            text: "Employee Added!",
            icon: "success",
          });
          if (result.status === "success") {
            navigate("/list");
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div className="border rounded-2xl  flex flex-col m-2 p-3  justify-center items-center">
      <div className="text-cyan-600 font-bold text-xl my-2">ADD EMPLOYEE </div>
      <hr />
      <form onSubmit={handleSubmit} className="md:w-[650px] w-full">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Name
            </label>
            <input
              onChange={handleChange}
              name="name"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Employee name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Date of Birth
            </label>
            <input
              onChange={handleChange}
              name="dob"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="date"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Address
            </label>
            <textarea
              onChange={handleChange}
              name="address"
              className="resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="textarea"
              placeholder="Address"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Photo
            </label>
            <input
              onChange={handleFileChange}
              name="image"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="file"
              placeholder="Email"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              name="email"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              State
            </label>
            <input
              onChange={handleChange}
              name="state"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="State"
              required
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              City
            </label>
            <input
              onChange={handleChange}
              name="city"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="City"
              required
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Phone
            </label>
            <input
              onChange={handleChange}
              name="phone"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="+91 XXXXX XXXXX"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Department
            </label>
            <div className="relative">
              <select
              value={formData.department} 
                onChange={handleChange}
                name="department"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                required
              >
                <option value="">Please select a department</option>
                <option value="Database Administrator">Database Administrator</option>
                <option value="Software Architect">Software Architect</option>
                <option value="Web Developer">Web Developer</option>
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
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Position
            </label>
            <div className="relative">
              <select
                onChange={handleChange}
                value={formData.position} 
                name="position"
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
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlfor="grid-zip"
            >
              Salary(₹)
            </label>
            <input
              onChange={handleChange}
              name="salary"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="₹"
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-cyan-500 mb-2 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;
