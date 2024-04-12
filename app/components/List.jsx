'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {useSearchParams} from 'next/navigation'

export default function List() {

  const [datalist , setdatalist] = useState(['loading'])
  const [loaded , setloaded] = useState(false)
  const [itemamount , setitemamount] = useState(true)

  const nowdate = new Date().toDateString()
  const [search , setsearch] = useState('')
  const [javascript , setjavascript] = useState(true)
  const [laravel , setlaravel] = useState(true)
  const [php , setphp] = useState(true)
  const [nodejs , setnodejs] = useState(true)
  const [react , setreact] = useState(true)


  const changesearch = (e) => {
   setsearch(e.target.value)
  }
  const checkjavascript = () =>{
    if(javascript == true){
      setjavascript(false)

      setlaravel(true)
      setnodejs(true)
      setphp(true)
      setreact(true)
      setsearch('javascript')
    }else{
      setjavascript(true)
      setsearch('')

    }
  }
  const checklaravel = () =>{
    if(laravel == true){
      setlaravel(false)
      setjavascript(true)

      setnodejs(true)
      setphp(true)
      setreact(true)
      setsearch('laravel')
    }else{
      setlaravel(true)
      setsearch('')
    }
  }
  const checknodejs = () =>{
    if(nodejs == true){
      setjavascript(true)
      setlaravel(true)
      setnodejs(false)
      setphp(true)
      setreact(true)
      setsearch('node')
    }else{
      setnodejs(true)
      setsearch('')
    }
  }
  const checkphp = () =>{
    if(php == true){
      setjavascript(true)
      setlaravel(true)
      setnodejs(true)
      setphp(false)
      setreact(true)
      setsearch('php')
    }else{
      setphp(true)
      setsearch('')
    }
  }
  const checkreact = () =>{
    if(react == true){
      setreact(false)
      setjavascript(true)
      setlaravel(true)
      setnodejs(true)
      setphp(true)
      setsearch('react')
    }else{
      setreact(true)
      setsearch('')
    }
  }

   useEffect(() => {

   
    const getlist = async() => {

       const dataer = await axios.get('https://myitjobsbackend.onrender.com')
       console.log(dataer.data.length)
       console.log(dataer.data)
       setdatalist(dataer.data)
       setInterval(() => {
          setloaded(true)
       }, 3000);
   


    }
    getlist()


 },[])

  return (
    <div className="list">
      <div className="searchlist">
        <div className="search">
          <div className="searchlogo"><img width={25} height={25} src={'/Search.png'} alt="" /></div>
        <input onChange={(e) => changesearch(e) } placeholder='Enter Your Job' type="text" />
  
      </div>
      <div className="choosener">{ javascript == true ? <button onClick={() => checkjavascript()} className='customcheckbox' ></button> :
       <button onClick={() => checkjavascript()} className='customcheckbox' >      <img width={15} height={15} src={'/Done.png'}  alt="" /></button>  } <div className="checkname">Javascript</div> </div>
       
       <div className="choosener">{ react ? <button onClick={() => checkreact()} className='customcheckbox' ></button> :
       <button onClick={() => checkreact()} className='customcheckbox' >      <img width={15} height={15} src={'/Done.png'}  alt="" /></button>  } <div className="checkname">ReactJs</div> </div>

<div className="choosener">{ php ? <button onClick={() => checkphp()} className='customcheckbox' ></button> :
       <button onClick={() => checkphp()} className='customcheckbox' >      <img width={15} height={15} src={'/Done.png'}  alt="" /></button>  } <div className="checkname">PHP</div> </div>

<div className="choosener">{ laravel ? <button onClick={() => checklaravel()} className='customcheckbox' ></button> :
       <button onClick={() => checklaravel()} className='customcheckbox' >      <img width={15} height={15} src={'/Done.png'}  alt="" /></button>  } <div className="checkname">Laravel</div> </div>

<div className="choosener">{ nodejs ? <button onClick={() => checknodejs()} className='customcheckbox' ></button> :
       <button onClick={() => checknodejs()} className='customcheckbox' >      <img width={15} height={15} src={'/Done.png'}  alt="" /></button>  } <div className="checkname">NodeJs</div> </div>

      </div>
   
      <div className="listframe">

        

      <div className="listsframer">
        
        
        {loaded == true ?  
        
        datalist.filter((item) => {return item.length == 0 ? setitemamount(true) :  search == '' ? item : item.JobSelection.toLowerCase().includes(search)} ).map(data =>   <div className='flex flexavi gap-5' >
        <div className="jobslist bg-slate-800  p-2 ">

        <div className="up m-1 flex gap-4   ">
        <img className='joblogos  ' src={'/' + `${data.JobSelection}` + '.png'} width={50} height={50} alt="" />
        
        <div className="tittle flex flex-col  justify-center align-center">
          <Link href={{
            pathname: '/jobinfo',
            query:{ id:data._id}
          }}  className="name text-blue-400 flex gap-2 align-center cursor-pointer ">{data.JobSelection + " " + "Developer" } <img width={23} height={10} src={'/Link.png'} alt="" /> </Link>
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
      


     
  
              </div>   
    


      </div>

    </div>
  )
}
