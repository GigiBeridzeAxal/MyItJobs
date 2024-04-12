'use client'
import React , {useEffect, useRef, useState} from 'react'
import {useSearchParams} from 'next/navigation'
import emailjs from '@emailjs/browser'
import { useAuth , UserButton , useUser } from '@clerk/nextjs'
import axios  from 'axios'
import Header from '@/app/components/header'







export default function page() {
  const { isLoaded, isSignedIn, user } = useUser();
    const idparam = useSearchParams().get('id')
    const [datalist , setdata] = useState(['Loading'])
    const [loaded , setloaded] = useState(false)
    const [by , setby] = useState()

    useEffect(() => {

      const getbackend = async() => {
        
        const get = await axios.get('http://localhost:3500/')

        
       

        setdata(get.data)
    

        setTimeout(() => {
           setloaded(true)
           const byier = get.data.filter(data => {return idparam == ""? null : data._id.toLowerCase().includes(idparam)  }).map(item => setby(item.by))

        }, 3000);
      

         
      }
      getbackend()

    },[])
    const form = useRef()



      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_xmkt6fx', 'template_tj9ueyk', form.current  , {
            publicKey: 'pUKpLbSCtSlOPjH76',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
      
   if(!isLoaded || !loaded){
    return null
   }else{
  return (

     
<>
<Header></Header>


<div className="emailsender">
      <div  className="frameforsendmail">
      

      {loaded == true ?  
        
        datalist.filter((item) => {return item.length == 0 ? setitemamount(true) :  idparam == '' ? item : item._id.toLowerCase().includes(idparam)} ).map(data =>   <div className='flex mobflexedr flexavi gap-5' >
        
        <div className="jobslist bg-slate-800  p-2 ">

        <div className="up m-1 flex gap-4   ">
        <img className='joblogos  ' src={'/' + `${data.JobSelection}` + '.png'} width={50} height={50} alt="" />
        
        <div className="tittle flex flex-col  justify-center align-center">
          <div  className="name text-blue-400 flex gap-2 align-center cursor-pointer ">{data.JobSelection + " " + "Developer" } <img width={23} height={10} src={'/Link.png'} alt="" /> </div>
          <div className="company text-gray-500 " >{data.Company}</div>

        </div>

        </div>

        <div className="sua flex align-center text-center m-1 ">
          <div className="education bg-sky-900  p-2  text-white/90 ">{data.JobSkill}</div>
          <div className="salary text-white/60  ">{data.salary ? data.salary + "$" : "Confedential!"}</div>
        </div>

        <div className="down flex justify-between m-1">
          <div className="ago text-white/50 gap-2 flex align-center "> <img src={'/Calendar.png'} width={20} height={20} alt="" />{data.ago  }</div>
          <div className="joblocation text-white/70 flex gap-2 align-center "> <img src={'/Laptop.png'} width={20} height={20} alt="" /> {data.joblocat} | Fulltime</div>
        </div>
        
          
           

        
        </div>     

        
      
      </div>   )  : <div className='text-white' >Loading Please Wait</div>}
      <form ref={form} onSubmit={sendEmail}>
      <label><img className='imre' width={20} src={'/Person.png'} alt="" /></label>
      <input value={user.username} className='text-gray-300' type="text" name="user_name" />
      <label><img className='imre' width={20} src={'/email.png'} alt="" /></label>
      <input value={by} className='text-gray-300' type="email" name="user_email" />
      <label><img className='imre' width={20} src={'/chat.png'} alt="" /></label>
      <textarea  cols={50} rows={10}  placeholder='Subject' name="message" />

      <input type="submit" value="Send" />
    </form>

      </div>

    </div>
</>
  )
}
}