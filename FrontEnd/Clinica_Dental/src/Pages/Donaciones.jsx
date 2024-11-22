import React from 'react'
import FormDonaciones from '../Components/FormDonaciones'
import HeaderDonaciones from '../Components/HeaderDonaciones'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import FormPagos from '../Components/FormPagos'


function Donaciones() {
  return (
    <div> 
      
       <HeaderDonaciones />
       <FormDonaciones />
       <FormPagos />
       <Footer />
    </div>
  )
}

export default Donaciones