import React from 'react'
import FormBlogEditor from '../Components/FormBlogEditor'
import Header from '../Components/Header'
import NavbarProtegido from '../Components/NavbarProtected'



function BlogEditor() {
  return (
    <div> 
      
       <Header />
       <NavbarProtegido />
       <FormBlogEditor />
    </div>
  )
}

export default BlogEditor