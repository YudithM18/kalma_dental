import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa componentes para el enrutamiento
import Login from "../Pages/Login";
import GeneralAdministration from "../Pages/GeneralAdministration";
import AdminServicios from "../Pages/AdminServicios";
import AdminTestimonios from "../Pages/AdminTestimonios";
import UsersAdministration from "../Pages/UsersAdministration";
import ProtectedRoute from './ProtectedRoute';
import Services from '../Pages/Services';
import Home from '../Pages/Home';
import AboutUs from "../Pages/AboutUs";
import WorkTeams from "../Pages/WorkTeams";
import Blog from "../Pages/Blog";
import BlogEditor from "../Pages/BlogEditor";
import Contact from "../Pages/Contact";
import TerminosCondiciones from "../Pages/TerminosCondiciones";
import Donaciones from "../Pages/Donaciones";
import PaymentAmount from "../Pages/PaymentAmount";

const Routing = () => {
    return (
       <Router>
         <Routes>
            <Route path= '/Login' element={<Login />} />
            <Route path= '/Services' element={<Services />} />
            <Route path= '/' element={<Home />} />
            <Route path= '/AboutUs' element={<AboutUs />} />
            <Route path= '/WorkTeams' element={<WorkTeams />} />
            <Route path= '/Blog' element={<Blog />} />
            <Route path= '/Contact' element={<Contact />} />
            <Route path= '/TerminosCondiciones' element={<TerminosCondiciones />} />
            <Route path= '/Donaciones' element={<Donaciones />} />
            <Route path= '/PaymentAmount' element={<PaymentAmount />} />
             /*Rutas protegidas*/
            <Route path= '/BlogEditor' element={<ProtectedRoute><BlogEditor /></ProtectedRoute>} />
            <Route path= '/GeneralAdministration' element={ <ProtectedRoute><GeneralAdministration /></ProtectedRoute> } />
            <Route path= '/AdminServicios' element={ <ProtectedRoute><AdminServicios /> </ProtectedRoute> } />
            <Route path= '/AdminTestimonios' element={ <ProtectedRoute> <AdminTestimonios /></ProtectedRoute> } />
            <Route path= '/UsersAdministration' element={<ProtectedRoute><UsersAdministration /></ProtectedRoute>} />
         </Routes>
       </Router>
    )
} 

export default Routing