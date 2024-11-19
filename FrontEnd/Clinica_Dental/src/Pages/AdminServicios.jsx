import React from 'react'
import Header from '../Components/Header'
import NavbarProtegido from '../Components/NavbarProtected'
import FormAdminServicios from '../Components/FormAdminServicios'

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