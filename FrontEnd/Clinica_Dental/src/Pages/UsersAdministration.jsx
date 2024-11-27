import React from 'react'
import FormUsersAdministration from '../Components/protectedComponents/FormUsersAdministration'
import Header from '../Components/generalComponents/Header'
import NavbarProtegido from '../Components/generalComponents/NavbarProtected'



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