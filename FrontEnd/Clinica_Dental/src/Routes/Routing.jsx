import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa componentes para el enrutamiento
import Login from "../Pages/Login";
import GeneralAdministration from "../Pages/GeneralAdministration";
import UsersAdministration from "../Pages/UsersAdministration";
//import ProtectedRoute from './ProtectedRoute';
import Services from '../Pages/Services';
import Home from '../Pages/Home';
import AboutUs from "../Pages/AboutUs";
import WorkTeams from "../Pages/WorkTeams";
import Blog from "../Pages/Blog";
import BlogEditor from "../Pages/BlogEditor";
import Contact from "../Pages/Contact";
import TerminosCondiciones from "../Pages/TerminosCondiciones";

const Routing = () => {
    return (
       <Router>
         <Routes>
            <Route path= '/Login' element={<Login />} />
            <Route path= '/GeneralAdministration' element={ <GeneralAdministration /> } />
            <Route path= '/UsersAdministration' element={<UsersAdministration />} />
            <Route path= '/Services' element={<Services />} />
            <Route path= '/' element={<Home />} />
            <Route path= '/AboutUs' element={<AboutUs />} />
            <Route path= '/WorkTeams' element={<WorkTeams />} />
            <Route path= '/Blog' element={<Blog />} />
            <Route path= '/BlogEditor' element={<BlogEditor />} />
            <Route path= '/Contact' element={<Contact />} />
            <Route path= '/TerminosCondiciones' element={<TerminosCondiciones />} />
         </Routes>
       </Router>
    )
} 

export default Routing