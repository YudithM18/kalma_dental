import React from 'react'
import FormContact from '../Components/FormContact'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import FooterProtected from '../Components/FooterProtected'



function Contact() {
  return (
    <div> 
      
       <Header />
       <Navbar />
       <FormContact />
       <FooterProtected />
    </div>
  )
}

export default Contact