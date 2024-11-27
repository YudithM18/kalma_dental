import React from 'react'
import FormBlogEditor from '../Components/protectedComponents/FormBlogEditor'
import Header from '../Components/generalComponents/Header'
import NavbarProtegido from '../Components/generalComponents/NavbarProtected'



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