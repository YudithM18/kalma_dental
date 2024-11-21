import React from 'react'
import FormDonaciones from '../Components/FormDonaciones'
import HeaderDonaciones from '../Components/HeaderDonaciones'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


function Donaciones() {
  return (
    <div> 
      
       <HeaderDonaciones />
       <FormDonaciones />
       <Footer />
    </div>
  )
}

export default Donaciones