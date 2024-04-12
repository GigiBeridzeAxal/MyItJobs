import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function page() {
  return (
    <div className="signframer">
       
       <div className="signer">
       <SignIn></SignIn>

       </div>


    </div>

  )
}
