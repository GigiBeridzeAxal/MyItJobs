'use client'
import React from 'react'
import Link from 'next/link'

import { useAuth , UserButton , useUser } from '@clerk/nextjs'

export default function Header() {


  const { isLoaded, isSignedIn, user } = useUser();

   
    if(!isLoaded){
      return null
    }else{

    

    return (
      <div className="header">
  
       <div className="headerframe">
          
          <div className="left">
             <img src={'/logo.png'} width={70} height={70} alt="" />
             <div className="MyIt">My IT Jobs</div>
             
  
          </div>
  
          <div className="center">
          <a href='/' className="overview pointer">Overview</a>

              
              <a href='/companyies' className="companyies">Companyies</a>

          </div>
  
  
          <div className="right">
            {
              isSignedIn ?   <div className='flex gapper text-white' >{user.username}  <UserButton afterSignOutUrl='/' ></UserButton></div>  :               <a href='/sign-in' className="signin">Sign-In</a>
            }

              <Link href={{
                pathname: '/postjoboffer'
              }} className="postoffer">Post Job Offer </Link>
          </div>
           
        </div>
  
  
      </div>
    )
   }
  }


