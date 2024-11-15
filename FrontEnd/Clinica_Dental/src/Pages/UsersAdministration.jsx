import React from 'react'
import FormUsersAdministration from '../Components/FormUsersAdministration'
import Header from '../Components/Header'
import NavbarProtegido from '../Components/NavbarProtected'



function UsersAdministration() {
  return (
    <div> 
      
       <Header />
       <NavbarProtegido />
       <FormUsersAdministration />
    </div>
  )
}

export default UsersAdministration