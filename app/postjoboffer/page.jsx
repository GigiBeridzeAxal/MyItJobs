'use client'
import axios from 'axios'
import React, { useState } from 'react'
import { useAuth , UserButton , useUser } from '@clerk/nextjs'

export default function page() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [hybrid , sethybrid] = useState(false)
  const [Remote , setRemote] = useState(false)
  const [Junior , setjunior] = useState(false)
  const [Senior , setSenior] = useState(false)
  const [final , setfinal] = useState('')
  const [finaljobskill , setfinaljobskill] = useState('Undefined')
  const [JobSelection , setjobselection] = useState('React')
 const [salary , setsalaray] = useState('')
 const [company , setcompany] = useState('')
 const [eror , seteror] = useState()


 const senddata = async() => {

  if(finaljobskill == 'Undefined'|| company == ''){
    console.log("Cant Send Data")
    seteror('eror')
  }else{
    seteror('noteror')


  
  const send = await axios.post('https://myitjobsbackend.onrender.com' , {
    JobSelection,


    Company: company,

    JobSkill: finaljobskill,
    salary,
    joblocat: final,
    by:user.primaryEmailAddress.emailAddress
    



  } )

  if(send){
    seteror('noteror')

  }else{
    seteror('eror')
  }

}
  
 }
  
 
 
 const changejob = (e) => {
    setjobselection(e.target.value)
  }
  const changecompany = (e) => {
    setcompany(e.target.value)
  }
  const changesalary = (e) => {
    setsalaray(e.target.value)
  }

  const checkhybrid = () => {

   sethybrid(true)
   setfinal('Hybrid')
   setRemote(false)
   if(hybrid == true){
    sethybrid(false)
   }

  }
  
  const checkremote = () => {

    setRemote(true)
    sethybrid(false)
    setfinal('Remote')
    if(Remote == true){
      setRemote(false)
    }
 
   }
   
  const checkjunior = () => {

    setjunior(true)
    setSenior(false)
    setfinaljobskill('Junior')
    if(Junior == true){
      setjunior(false)
    }
 
   }
   
  const checksenior = () => {

    setSenior(true)
    setjunior(false)
    setfinaljobskill('Senior')
    if(Senior == true){
      setSenior(false)
    }
 
   }

   if(!isLoaded){
    return null
   }else{

 

  return (
    <>


<div className="postjob">
        {
      eror == "noteror" ? <div className='text-emerald-500' >You Succesfuly Post New Job</div>: <div></div>
    }
         {
      eror == "eror" ? <div className='text-red-500' >All Field Are Mandatory Please Try Again</div>: <div></div>
    }
    <a href='/' className="back pointer text-white ">
    ◀️ დაბრუნდი უკან
       
    </a>

<div className="postjobframe">
<div className='flex flexavi gap-5' >
    <div className="jobslist bg-slate-800  p-2 ">

    <div className="up m-1 flex gap-4   ">
    <img className='joblogos  ' src={'/' + `${JobSelection}` + '.png'} width={50} height={50} alt="" />
    
    <div className="tittle flex flex-col  justify-center align-center">
      <div  className="name text-blue-400 flex gap-2 align-center cursor-pointer ">{JobSelection + " " + "Developer" } <img width={23} height={10} src={'/Link.png'} alt="" /> </div>
      <div className="company text-gray-500 " >{company}</div>

    </div>

    </div>

    <div className="sua flex align-center text-center m-1 ">
      <div className="education bg-sky-900  p-2  text-white/90 ">{finaljobskill}</div>
      <div className="salary text-white/60  ">{salary ? salary + "$" : "Confedential!"}</div>
    </div>

    <div className="down flex justify-between m-1">
      <div className="ago text-white/50 gap-2 flex align-center "> <img src={'/Calendar.png'} width={20} height={20} alt="" />Now</div>
      <div className="joblocation text-white/70 flex gap-2 align-center "> <img src={'/Laptop.png'} width={20} height={20} alt="" /> {final} | Fulltime</div>
    </div>
    
      
       

    
    </div>     

    
  
  </div> 
   
   <div className="jobchooser  "> <div className="job text-white">Select Your Job</div>  <select onChange={(e) => changejob(e)} >
    <option value="React">React</option>
    <option value="Javascript">Javascript</option>
    <option value="PHP">Php</option>
    <option value="Laravel">Laravel</option>
    <option value="NodeJs">NodeJs</option>
   </select></div>

   <input  onChange={(e) => changesalary(e)} className='p-2' placeholder='Enter Your Salary $  ' type="text text-black " />
   <div className=" flex gap-2 jobtypeselector">

     
     {hybrid == true ?          <button onClick={() => checkhybrid()} className="hybrid bg-emerald-500 ">Hybrid</button>  :   <button onClick={() => checkhybrid()} className="hybrid ">Hybrid</button>        }
     {Remote == true ?                   <button onClick={() => checkremote()} className="remote bg-emerald-500 ">Remote</button>  :            <button onClick={() => checkremote()} className="remote">Remote</button>       }


   </div>
   <input onChange={(e) => changecompany(e)} className='p-2' placeholder='Enter Your Company Name  ' type="text text-black " />
   <div className=" flex gap-2 ">
     
     {Junior == true ?          <button onClick={() => checkjunior()} className="hybrid bg-emerald-500 ">Junior</button>  :   <button onClick={() => checkjunior()} className="hybrid ">Junior</button>        }
     {Senior == true ?                   <button onClick={() => checksenior()} className="remote bg-emerald-500 ">Senior</button>  :            <button onClick={() => checksenior()} className="remote">Senior</button>       }


   </div>
   <button onClick={() => senddata()} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
Create Job
</button>
   


</div>
</div>
    </>
   
  )
}
}
