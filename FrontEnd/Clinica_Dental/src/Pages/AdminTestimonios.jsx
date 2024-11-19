import React from 'react'
import Header from '../Components/Header'
import NavbarProtegido from '../Components/NavbarProtected'
import FormAdminTestimonios from '../Components/FormAdminTestimonios';

function AdminTestimonios() {
  return (
    <div>
        <Header />
        <NavbarProtegido />
        <FormAdminTestimonios />
    </div>
  )
}

export default AdminTestimonios