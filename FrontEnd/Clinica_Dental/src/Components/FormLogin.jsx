import React, { useState, useEffect } from "react"; // Importa React y hooks necesarios
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'; // Importa SweetAlert2 para mostrar alertas
import { useNavigate } from "react-router-dom"; // Importa hook para navegación
import GetUsers from "../Service/GetUsers"; // Importa función para obtener usuarios

function FormLogin() {
  // Define estados para manejar los datos del formulario
  const [gmail, setGmail] = useState(''); // Estado para almacenar el correo electrónico
  const [pass, setPass] = useState(''); // Estado para almacenar la contraseña
  const [users, setUsers] = useState([]); // Estado para almacenar la lista de usuarios
  const navigate = useNavigate(); // Inicializa el hook de navegación

  // useEffect para cargar usuarios al montar el componente
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await GetUsers(); // Llama a la función para obtener usuarios
      setUsers(data); // Actualiza el estado con la lista de usuarios obtenida
    };
    fetchUsers(); // Ejecuta la función
  }, []);

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    // Busca el usuario que coincida con el correo y contraseña ingresados
    const listaU = users.find(user => user.gmail === gmail && user.pass === pass);
    if (listaU) {
      // Si se encuentra el usuario, muestra una alerta de éxito
      Swal.fire({
        title: 'Has ingresado exitosamente',
        text: 'Gracias!!',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      localStorage.setItem("Autenticado", true); // Guarda en localStorage que el usuario está autenticado
      navigate("/GeneralAdministration"); // Navega a la página de administración
    } else {
      // Si no se encuentra el usuario
      if (!gmail || !pass) {
        // Si algún campo está vacío, muestra una alerta de error
        Swal.fire({
          title: 'Error',
          text: 'Todos los campos son requeridos',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      } else {
        // Verifica si las credenciales ingresadas son incorrectas
        if (users.every(user => user.gmail !== gmail && user.pass !== pass)) {
          Swal.fire({
            title: 'Error',
            text: 'Los datos ingresados son incorrectos',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
          return; // Sale de la función si las credenciales son incorrectas
        }
      }
    }
  };

  // Función para manejar el botón "VOLVER"
  const BLogin = () => {
    navigate("/"); // Navega a la página principal
  };

  // Renderiza el formulario de inicio de sesión
  return (
    <div className="form-container">
      <div className="form-card">
        <h1>INICIO SESION</h1> {/* Título del formulario */}
        <label htmlFor="gmail"><h2>CORREO ELECTRONICO</h2></label>
        <input className="input2" type="text" placeholder="Ingrese su Correo" value={gmail} onChange={(e) => setGmail(e.target.value)} /> {/* Input para el correo electrónico */}
        
        <label htmlFor="pass"><h2>CONTRASEÑA</h2></label>
        <input className="input2" type="password" placeholder="Ingrese su Contraseña" value={pass} onChange={(e) => setPass(e.target.value)} /> {/* Input para la contraseña */}
        <br />
        <br />
        <button className="submit-button" onClick={handleLogin}>INGRESAR</button> {/* Botón para iniciar sesión */}
        <button className="submit-button" onClick={BLogin}>VOLVER</button> {/* Botón para volver a la página principal */}
      </div>
    </div>
  );
}

export default FormLogin; // Exporta el componente