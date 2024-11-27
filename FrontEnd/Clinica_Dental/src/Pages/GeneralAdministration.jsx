import React from 'react'
import FormGeneralAdministration from '../Components/protectedComponents/FormGeneralAdministration'
import Header from '../Components/generalComponents/Header'
import NavbarProtegido from '../Components/generalComponents/NavbarProtected'



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