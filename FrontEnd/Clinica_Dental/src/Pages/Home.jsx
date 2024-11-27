import React from 'react'
import FormHome from '../Components/FormHome'
import Header from '../Components/generalComponents/Header'
import Navbar from '../Components/generalComponents/Navbar'
import Footer from '../Components/generalComponents/Footer'




function Home() {
  return (
    <div> 
      
       <Header />
       <Navbar />
       <FormHome />
       <Footer />
    </div>
  )
}

export default Home