import Logo from '../assets/cartrabbit_logo.png'
import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await response.json();
    if (response.ok) {
      sessionStorage.setItem("user", JSON.stringify(body.user));
      navigate("/");
    } else {
      console.error("Error:", body);
      toast.error(body.error, {
        theme: "colored"
      });
    }
  };

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      navigate("/home");
    }
  });
  return (
    <div>
     <ToastContainer limit={3}/>
<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl ">
			<div className="max-w-md mx-auto">
				
				<div className="divide-y divide-gray-200">
                <div className="flex min-h-full flex-col justify-center px-6 lg:px-8">
  <div className="sm:mx-auto  w-[280px] sm:max-w-sm">
    <img className="mx-auto h-20 w-auto" src={Logo} alt="Your Company"/>
    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login to Portal</h2>
    <h2 className="text-center text-base font-bold leading-9 tracking-tight text-green-400">HRMS </h2>
  </div>

  <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleLogin} className="space-y-3" action="#" method="POST">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900"> Username or Email address</label>
        <div className="mt-2">
          <input id="email" name="username" type="text" autoComplete="username" required className="block w-full pl-2 text-base font-semibold rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-300 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" autoComplete="current-password" required className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-300 outline-none sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>
  </div>
</div>
				</div>
			</div>
		</div>
	</div>
</div>
    </div>
  )
}

export default Login