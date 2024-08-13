'use client'
import React , {useEffect, useRef, useState} from 'react'
import {useSearchParams} from 'next/navigation'
import emailjs from '@emailjs/browser'
import { useAuth , UserButton , useUser } from '@clerk/nextjs'
import axios  from 'axios'
import Header from '@/app/components/Header'
import Loading from '@/app/components/Loading'









export default function page() {
  const { isLoaded, isSignedIn, user } = useUser();
    const idparam = useSearchParams().get('id')
    const [datalist , setdata] = useState([0])
    const [loaded , setloaded] = useState(false)
    const [name , setname] = useState()
    const [phone , setphone] = useState()
    const [message , setmessage] = useState()



    const SendEmail = (e) => {
      e.preventDefault();
      asyncfunc()
      setmessage('')
      setphone('')
      setname('')

    }



      const asyncfunc = async() => {

      const send = await axios.post(process.env.NEXT_PUBLIC_SendEmail , {
        message:message,
        phone:phone,
        email:datalist[0].by,
        name:name
      })





      }








 


    useEffect(() => {

      const getbackend = async() => {
        
        const get = await axios.post(process.env.NEXT_PUBLIC_GetUserByJob , {id:idparam} )

        
       

            setdata(get.data)


      

         
      }
      getbackend()

    },[])





      
   if(!isLoaded){
    return null
   }else{
  return (

     
<>
<Header></Header>


<div className="emailsender">
      <div  className="frameforsendmail">
      

      {datalist[0] !== 0 ?  
        
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

        
      
      </div>   )  : <div></div>}

      <form onSubmit={SendEmail}>

        <div className="line">
        <div className="inputtittle">სახელი<div className="star">*</div></div>
        <input value={name} onChange={(e) => setname(e.target.value)} type="text" required   placeholder='გიგი ბერიძე'  />   
        </div>

        
        <div className="line">
        <div className="inputtittle">მიმღები<div className="star">*</div></div>
        <input type="text" required value={datalist[0].by}   />   
        </div>
        <div className="line">
        <div className="inputtittle">მობილურის ნომერი<div className="star">*</div></div>
        <input value={phone} minLength={9} maxLength={9} onChange={(e) => setphone(e.target.value)} type="Number" required placeholder='593404836'   />   
        </div>
           
           
        <div className="line">
        <div className="inputtittle">შეტყობინება<div className="star">*</div></div>
        <textarea value={message} onChange={(e) => setmessage(e.target.value)} type="text" required placeholder='მოგესალმებით ჩემი სახელია ზაზა. მე ვარ გამოცდილი კანდიდატი თქვენი
        განცხადებისთვის '    />   
        </div>
        <button className='w-[100%] jobinfobutton p-[10px] text-white bg-blue-500' type='submit' >გაგზავნა</button>

      </form>
     

      </div>

    </div>
</>
  )
}
}