import React from 'react'
import FormDonaciones from '../Components/donationsComponents/FormDonaciones'
import HeaderDonaciones from '../Components/donationsComponents/HeaderDonaciones'
import Footer from '../Components/generalComponents/Footer'
import FormPagos from '../Components/donationsComponents/FormPagos'


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