import React from 'react'
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Signin() {
  const [data,setData]=useState("");


  let {register,handleSubmit}=useForm();

  let navigate=useNavigate();



  let Submitfun = async(userdata)=>{


    console.log('User Data is:'+userdata.password);
  
    axios.post("http://localhost:5000/signup/Signupinfo",userdata)
    .then((res)=>{
     if(res.data==='user already exists'){
      setData("* Account already existed");
     }
     else{
      navigate('/')
     }
    console.log("results "+res.data);
    })
    .catch(err=>console.log("err at posting :",err.message));
  
  }
  return (
    <div className='container '>
        <form action="" className=' border border-solid ' onSubmit={handleSubmit(Submitfun)}>
          <div className='m-3 '> 
                <input type="email" name="" id="" placeholder='email' {...register('email',{required:true})}/>
            </div>
           <div className='m-3'>
           <input type="password" name="" id="" placeholder='password' {...register('password',{required:true})}/>
           </div>
           <button className='btn btn-success p-1 ' type='Submit'>submit</button>
           <h3>{data}</h3>
        </form>
      {/* <div className=' col-lg-6  d-flex'>
       <div className="cards m-3 ">
        <div className=" row ">
        <div className="">
            <div className="card ">
                <div className="card-body x">
                <img src="https://cdn.unstop.com/uploads/images/courses/unstop-classroom-banner-new.png?d=840x870" alt="" width={75}/>
                 </div>
            </div>
        </div>
    </div>
        </div>
        <div className="cards">
        <div className="">
        <div className="cols">
            <div className="card ">
                <div className="card-body x">
               sssss
                </div>
            </div>
        </div>
    </div>
        </div>
        <div className="cards">
        <div className=" ">
        <div className="cols">
            <div className="card ">
                <div className="card-body x">
               sssss
                </div>
            </div>
        </div>
    </div>
        </div>
       </div> */}
    </div>
  )
}

export default Signin