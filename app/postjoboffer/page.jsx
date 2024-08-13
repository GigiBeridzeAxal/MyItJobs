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
 const [salary , setsalaray] = useState(5)
 const [company , setcompany] = useState()
 const [eror , seteror] = useState()
 const [dolarincduler , setdolarincluder] = useState()
 const [companyincluder , setcompanyincluder] = useState()
 const [ok , setok] = useState()
 const [cooldown , setcooldown] = useState(false)


const learr = (e) => {
  e.preventDefault();




  setok(true)
  senddata()

  setTimeout(() => {
    window.location ='/'
  }, 1500);


 
}

 const senddata = async(e) => {

 

  setdolarincluder(false)

  if(finaljobskill == 'Undefined'){

    console.log("Cant Send Data", finaljobskill , company)
    seteror('eror')
  }else{
    seteror('noteror')

  




        
  const send = await axios.post(process.env.NEXT_PUBLIC_BACKEND , {
    JobSelection,


    Company: company,

    JobSkill: finaljobskill,
    salary,
    joblocat: final,
    by:user.primaryEmailAddress.emailAddress
    



  } )

  if(send){
    seteror('noteror')
    console.log(send)


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


 

  return (
    <>
       <div className="postofferer">
        <div className="postoffertittle text-white"><div className="green text-emerald-300">მოძებნე</div> საუკეთესო IT</div>
        <div className="postofferframe ">
          {ok == true ? <div className="sucess text-emerald-500 flex items-center justify-center w-[100%]">თქვენი განცხადება წარმატებით გამოქვეყნდა</div> : <div></div>}
          <form className='formposter' onSubmit={learr}>


          <div className="inputline">
                   <div className="inputtittle">კომპანიის დასახელება <div className="star">*</div></div>
                   {companyincluder == true ? <div className="error text-red-500">გთხოვთ შეიყვანოთ კომპანიის დასახელება</div> : <div></div>}
          <input required type="text" onChange={(e) => setcompany(e.target.value)} placeholder='კომპანია სან დასუფთავება'  />   
          
          </div>
          

          <div className="inputline">
                   <div className="inputtittle">გამოცდილება<div className="star">*</div></div>
          <div className="radioinputs flex items-center justify-center gap-[25%]">
            <span className='flex items-center gap-[15px]' ><input required type="radio" onClick={(e) => setfinaljobskill('Junior')} name='Juniore' />ჯუნიორი</span>

            <span className='flex items-center gap-[15px]'><input type="radio" onClick={(e) => setfinaljobskill('Senior')} name='Juniore' />სენიორი</span>

          </div>

          </div>
          <div className="inputline">
                   <div className="inputtittle">პროფესია<div className="star">*</div></div>
          <div className="radioinputs flex column gap-[25%]">
            <div className="firstline flex w-[100%] justify-around items-center">
                          <span className='flex  w-[250px] items-center gap-[15px]' ><input required type="radio" onClick={() => setjobselection('Laravel')} name='Juniorr' />Laravel Developer</span>
            <span className='flex  w-[250px] items-center gap-[15px]'><input type="radio" onClick={() => setjobselection('NodeJs')}  name='Juniorr' />NodeJs Developer</span>
            </div>

            <div className="secondline flex width-100% justify-around items-center">
              

            <span className='flex w-[250px] items-center gap-[15px]'><input type="radio" onClick={() => setjobselection('React')} name='Juniorr' />React Developer</span>
            <span className='flex w-[250px] items-center gap-[15px]'><input type="radio" onClick={() => setjobselection('Javascript')} name='Juniorr' />Javascript Developer</span>
            
            </div>


          </div>

          </div>
          <div className="inputline">

            
                   <div className="inputtittle">ანაზღაურება<div className="star">*</div></div>
                   {dolarincduler == true ? <div className="error text-red-500">გთხოვთ შეიყვანოთ ვალიდური ციფრი</div> : <div></div>}
          <input type="Number" required  onChange={(e) => setsalaray(e.target.value)} placeholder='1500$'  />   
          
          </div>

          <div className="inputline">
                   <div className="inputtittle">სამუშაო ლოკაცია<div className="star">*</div></div>
          <div className="radioinputs flex items-center justify-center gap-[25%]">
            <span className='flex items-center gap-[15px]' ><input required type="radio" onClick={() => setfinal('Hybrid')} name='Juniors' />ჰიბრიდული</span>

            <span className='flex items-center gap-[15px]'><input type="radio" onClick={() => setfinal('Remote')} name='Juniors' />სახლიდან</span>

          </div>

          </div>
          <button type='submit'  className='w-[100%] gancxadebabutton p-[10px] bg-blue-500 text-white' >განცხადების დადასტურება</button>
          
           

          </form>



        </div>
       </div>
    </>
   
  )
}

