import React from 'react'
import Header from '../Components/generalComponents/Header'
import NavbarProtegido from '../Components/generalComponents/NavbarProtected'
import FormAdminTestimonios from '../Components/protectedComponents/FormAdminTestimonios';

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