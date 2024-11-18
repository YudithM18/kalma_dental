import React from 'react'
import FormBlog from '../Components/FormBlog'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import FormPagos from '../Components/FormPagos'



function Blog() {
  return (
    <div> 

       <Header />
       <Navbar />
       <FormBlog />
       <FormPagos />
    </div>
  )
}

export default Blog