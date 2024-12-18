import React, { useState, useEffect } from "react"; // Importa React y hooks necesarios
import '../Styles/FormLogin.css';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'; // Importa SweetAlert2 para mostrar alertas
import { useNavigate } from "react-router-dom"; // Importa hook para navegación
import PostToken from "../Service/Usuarios/PostToken"; // Importa función para obtener usuarios
import imagen from '../Img/fondo2.jpg'

import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../i18n'


function FormLogin() {

  // Define estados para manejar los datos del formulario
  const [user, setUser] = useState(''); // Estado para almacenar el correo electrónico
  const [pass, setPass] = useState(''); // Estado para almacenar la contraseña
  const navigate = useNavigate(); // Inicializa el hook de navegación


  
  useEffect(() => {
        
    document.body.classList.add('fondo-login');
    return () => {
        document.body.classList.remove('fondo-login');
    };
}, []);


  // Función para manejar el inicio de sesión
  const handleLogin = async() => {
    // Busca el usuario que coincida con el correo y contraseña ingresados
    //const listaUs = users.find(users => users.username === username && users.pass === pass);
    const listaU = await PostToken(user, pass);
    console.log(listaU);
    
    if (listaU.access) {
      // Si se encuentra el usuario, muestra una alerta de éxito
      Swal.fire({
        title:  t('alertaLogin'),
        text:  t('alertaLogin1'),
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      localStorage.setItem("Autenticado", true); // Guarda en localStorage que el usuario está autenticado
      navigate("/GeneralAdministration"); // Navega a la página de administración
    } else {
      // Si no se encuentra el usuario
      if (!user || !pass) {
        // Si algún campo está vacío, muestra una alerta de error
        Swal.fire({
          title: 'Error',
          text:  t('alertaLogin2'),
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }else{
        if (!listaU.access) {
          // Si los datos son diferentes, muestra una alerta de error
          Swal.fire({
            title: 'Error',
            text:  t('alertaLogin3'),
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      }
    }
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };

  // Función para manejar el botón "VOLVER"
  const BLogin = () => {
    navigate("/"); // Navega a la página principal
  };

  // Renderiza el formulario de inicio de sesión
  return (
    
    <div className="login-container">
      <div className="omitir">
       <button className="back-button" onClick={BLogin}>{t('btnO')}</button>
      </div>
      {/* Lado izquierdo con el formulario de login */}
      <div className="login-left">
        <h1 className="login-title">{t('bienvenidoAdmin')}</h1> {/* Título del formulario */}
        
        <label className="Move" htmlFor="user">{t('usuario')}</label>
        <input 
          className="input-field" 
          type="text" 
          placeholder="Ingrese su usuario" 
          value={user} 
          onChange={(e) => setUser(e.target.value)} 
        />

        <label className="move" htmlFor="pass">{t('contra')}</label>
        <input 
          className="input-field" 
          type="password" 
          placeholder="Ingrese su contraseña" 
          value={pass} 
          onChange={(e) => setPass(e.target.value)} 
        />
        
        <button className="login-button" onClick={handleLogin}>{t('btnIngreso')}</button>
        
      </div>

      {/* Lado derecho con la imagen atractiva */}
      <div className="login-right">
        <img src= {imagen} alt="Decoracion" />
      </div>
    </div>
   
  );
}


export default FormLogin; // Exporta el componente