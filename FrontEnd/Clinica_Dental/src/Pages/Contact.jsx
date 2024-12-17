import React from 'react'
import FormContact from '../Components/FormContact'
import Header from '../Components/generalComponents/Header'
import Navbar from '../Components/generalComponents/Navbar'
import FooterSecundary from '../Components/generalComponents/FooterSecundary'



function Contact() {
  return (
    <div> 
      
       <Header />
       <Navbar />
       <FormContact />
       <FooterSecundary />
    </div>
  )
}

export default Contact