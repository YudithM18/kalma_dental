import React from 'react'
import Header from '../Components/generalComponents/Header'
import NavbarProtegido from '../Components/generalComponents/NavbarProtected'
import FormWorkStaff from '../Components/protectedComponents/FormWorkStaff'

function AdminworkTeam() {
  return (
    <div>
        <Header />
        <NavbarProtegido />
        <FormWorkStaff/>
    </div>
  )
}

export default AdminworkTeam