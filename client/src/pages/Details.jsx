import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
const Details = () => {
    const [employee,setEmployee]=useState();
    const searchParams = new URLSearchParams(window.location.search);
  const id = Number(searchParams.get("id"));
  const navigate = useNavigate();

  const goBack = () => {
      // Go back to the previous page
      navigate(-1);
  };  useEffect(() => {
        const fetchEmployee=async()=>{
          const res = await fetch(`http://localhost:5000/editemployee/${id}`);
          const data = await res.json();
          setEmployee(data[0]);
        }
        fetchEmployee();
      }, []);
    return (
        <div className="m-6 ">
            
        <div className="text-sm flex justify-center leading-6">
        <ArrowLeft className='relative ' onClick={goBack} />
        <figure className=" w-full relative flex justify-center items-center flex-col-reverse bg-slate-100 rounded-lg px-3 ">
        
            <blockquote className=" text-slate-700 ">
                <p>#{id}</p>
            </blockquote>
            <figcaption className="flex items-center space-x-4">
                <img src={"http://localhost:5000/profileImage/image/" + employee?.image} alt="" className="flex-none w-40 h-40 rounded-full object-cover" loading="lazy" decoding="async"/>
                <div className="flex-col space-y-3 mt-10">
                    <div className="text-base rounded p-2 text-slate-900 font-semibold flex">
                       <div className='font-bold text-base mr-3'> Name :</div>
                        <p>{employee?.name}</p>
                    </div>
                    <div className=" rounded p-2 text-base text-slate-900 flex font-semibold">
                    <div className='font-bold text-base mr-3'>  Email:</div>
                        <p>{employee?.email}</p>
                    </div>
                    <div className="rounded p-2 text-base text-slate-900 flex font-semibold ">
                    <div className='font-bold text-base mr-3'>  Date of Birth:</div>
                        <p>{employee?.dob.split('T')[0]}</p>
                    </div>
                    <div className="rounded p-2 text-base text-slate-900 flex font-semibold">
                    <div className='font-bold text-base mr-3'>  Phone:</div>
                        <p>{employee?.phone}</p>
                    </div>
                    <div className="rounded p-2 text-base text-slate-900 flex font-semibold ">
                    <div className='font-bold text-base mr-3'>    Address:</div>
                       <p>{employee?.address}</p>
                    </div>
                    <div className="rounded p-2 text-base text-slate-900 flex font-semibold ">
                    <div className='font-bold text-base mr-3'>   State:</div>
                        <p>{employee?.state}</p>
                    </div>
                    <div className="rounded p-2 text-base text-slate-900 flex font-semibold">
                    <div className='font-bold text-base mr-3'>   City:</div>
                        <p>{employee?.city}</p>
                    </div>
                    
                </div>
                <div className='space-y-3 '>
                <div className="rounded p-2 text-base text-slate-900 flex font-semibold">
                    <div className='font-bold text-base mr-3'>   Department:</div>
                        <p>{employee?.department}</p>
                    </div>
                <div className="rounded p-2 text-base text-slate-900 flex font-semibold">
                    <div className='font-bold text-base mr-3'>   Position:</div>
                        <p>{employee?.position}</p>
                    </div>
                <div className="rounded p-2 text-base text-slate-900 flex font-semibold">
                    <div className='font-bold text-base mr-3'>   Salary:</div>
                        <p>₹{employee?.salary}</p>
                    </div>
                </div>
            </figcaption>
        </figure>
    </div></div>
    );
};

export default Details;
