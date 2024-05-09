import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className=" bg-right bg-cover"> 
      <div className="w-full container  p-6">
        <div className="w-full flex items-center justify-center ">
          <a className="flex items-center text-cyan-300 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            {/* <Vector/> */}
            HRMS TOOL
          </a>
          
        </div>
      </div>

      <div className=" container pt-10 md:pt-10 px-6 flex-wrap flex-col md:flex-row">
        <div className="flex text-center justify-center  flex-col w-full   overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-4xl text-cyan-800 font-bold leading-tight  ">
Optimize HR with smart automation.</h1>
          <p className=" leading-normal text-base md:text-xl mb-8 text-slate-500">Effortlessly manage your workforce with precision and ease. Discover our HRMS tool—your ultimate solution for optimizing employee productivity and simplifying HR tasks!</p>
          <div className="flex justify-center items-center mt-5 w-full pb- lg:pb-0">
            <Link to="/list"><button className="h-12 text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View Employees</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
