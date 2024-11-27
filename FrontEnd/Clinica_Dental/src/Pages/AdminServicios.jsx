import React from 'react'
import Header from '../Components/generalComponents/Header'
import NavbarProtegido from '../Components/generalComponents/NavbarProtected'
import FormAdminServicios from '../Components/protectedComponents/FormAdminServicios'

function AdminServicios() {
  return (
    <div>
        <Header />
        <NavbarProtegido />
        <FormAdminServicios />
    </div>
  )
}

export default AdminServicios