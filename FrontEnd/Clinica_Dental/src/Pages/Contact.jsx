import React from 'react'
import FormContact from '../Components/FormContact'
import Header from '../Components/generalComponents/Header'
import Navbar from '../Components/generalComponents/Navbar'
import FooterProtected from '../Components/generalComponents/FooterProtected'



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