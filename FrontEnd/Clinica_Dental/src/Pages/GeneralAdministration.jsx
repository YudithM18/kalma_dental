import React from 'react'
import FormGeneralAdministration from '../Components/FormGeneralAdministration'
import Header from '../Components/Header'
import NavbarProtegido from '../Components/NavbarProtected'



function GeneralAdministration() {
  return (
    <div> 
       <Header />
       <NavbarProtegido />
       <FormGeneralAdministration />
    </div>
  )
}

export default GeneralAdministration