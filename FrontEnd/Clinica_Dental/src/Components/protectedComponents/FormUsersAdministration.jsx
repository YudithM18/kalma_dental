import React, { useState, useEffect }  from 'react'
import '../../Styles/FormUsersAdmi.css'
import PostUsers from '../../Service/Usuarios/PostUsers'
import getUsers from '../../Service/Usuarios/getUsers'
import DeleteUsers from '../../Service/Usuarios/DeleteUsers'
import updateUsers from '../../Service/Usuarios/updateUsers'
import Swal from 'sweetalert2';

import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation
import '../../i18n'


function FormUsersAdministration() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma dinámicamente
  };


  const [username, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [first_name, setFname] = useState('')
  const [last_name, setLname] = useState('')

  const [confirmPass, setConfirmPass] = useState('');


  ///Editados
  const [username_edit, setNamedit] = useState('')
  const [email_edit, setEmail_edit] = useState('')
  const [password_edit, setPassword_edit] = useState('')
  const [first_name_edit, setFname_edit] = useState('')
  const [last_name_edit, setLname_edit] = useState('')

const [users, setUsers] = useState([])

useEffect(() => {
  const fetchUsers = async () => {
    const data = await getUsers(); 
    setUsers(data);
  };
  fetchUsers(); // Ejecuta la función
}, []);


  function cargausername(event) {
    setName(event.target.value);
}

function cargaEmail(event) {
    setEmail(event.target.value);
}

function cargaPass(event) {
    setPassword(event.target.value);
}

function cargaConfirmPass(event) {
  setConfirmPass(event.target.value);
}

function cargafirst_name(event) {
  setFname(event.target.value);
}

function cargalast_name(event) {
  setLname(event.target.value)
}



async function cargaNewUsers(e) {
  e.preventDefault();
  
  // Validación de contraseñas
  if (password !== confirmPass) {
    // Si las contraseñas no coinciden, mostramos el SweetAlert
    Swal.fire({
      icon: 'error',  // Tipo de alerta
      title: 'Error', // Título de la alerta
      text: 'Las contraseñas no coinciden. Por favor, verifica e intenta nuevamente.',  // Texto del mensaje
      confirmButtonText: 'Aceptar'  // Texto del botón de confirmación
    });
    return; // No continuar con la creación del usuario si las contraseñas no coinciden
  }


  try {
    // Aquí iría el código para hacer el POST si las contraseñas coinciden
  await PostUsers(first_name, last_name, username, password, email);
    
    // Muestra la alerta de éxito si todo está bien
    Swal.fire({
      title: t('alertaUserAD1'), // Usar la traducción para el título
      text: t('alertaUserAD2'), // Usar la traducción para el texto
      icon: 'success',
      confirmButtonText: t('alertaUserAD') // Usar la traducción para el botón
    });

    // Limpiar los campos
    setName('');
    setConfirmPass('');
    setLname('');
    setPassword('');
    setEmail('');
    setFname('');
  } catch (error) {
    // Si hay un error, muestra la alerta de error
    Swal.fire({
      title: 'Error',
      text: t('alertaUserAD3'), // Usar la traducción para el texto de error
      icon: 'error',
      confirmButtonText: t('alertaUserAD') // Usar la traducción para el botón
    });
  }
  
  
}




function cargafirst_name_edit(event) {
  setFname_edit(event.target.value); 
}

function cargalast_name_edit(event) {
  setLname_edit(event.target.value); 
}

function cargaUsername_edit(event) {
  setNamedit(event.target.value); 
}

function cargaEmail_Edit(event) {
  setEmail_edit(event.target.value); 
}

function cargaPass_edit(event) {
  setPassword_edit(event.target.value); 
}

async function cargarDelete(id) {
  const confirmDelete = await Swal.fire({
        title: t('alertaUserAD4'),
        text: t('alertaUserAD5'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: t('alertaUserAD6'),
        cancelButtonText: t('alertaUserAD7'),
      });
  
      if (confirmDelete.isConfirmed) {
  await DeleteUsers(id)
  const valorEncontrar = users.filter(users => users.id !== id);
  setUsers([...valorEncontrar])
  
        Swal.fire(
          t('alertaUserAD8'),
          t('alertaUserAD9'),
          'success'
        );
      }
}


const cargaEdicion = async (id) => {
  
  const UsersOriginal = users.find(users => users.id === id);

  if (!UsersOriginal) return;


  const nuevosDatos = {
    first_name: first_name_edit || UsersOriginal.first_name,  
    last_name: last_name_edit || UsersOriginal.last_name, 
    username: username_edit || UsersOriginal.username, 
    password: password_edit || UsersOriginal.password,  
    email: email_edit || UsersOriginal.email, 
  };
  


    try {
      await updateUsers(id, nuevosDatos.first_name, nuevosDatos.last_name, nuevosDatos.username, nuevosDatos.password, nuevosDatos.email);
      

      const usersactualizados = users.map(users => 
        users.id === id ? { ...users, ...nuevosDatos } : users
      );

      setUsers(usersactualizados);

      // Mostrar alerta de éxito
        Swal.fire({
        title: t('alertaUserAD0'), // Título traducido
        text: t('alertaUserAD11'),  // Texto traducido
        icon: 'success',
        confirmButtonText: t('alertaUserAD') // Texto del botón traducido
      });

      // Resetea los campos de entrada
      setFname('');
      setLname('');
      setName('');
      setEmail('');
      setPassword('');


    } catch (error) {
      // Si ocurre un error, muestra la alerta de error
      Swal.fire({
        title: 'Error',
        text: t('alertaUserAD12'), // Texto de error traducido
        icon: 'error',
        confirmButtonText: t('alertaUserAD') // Texto del botón traducido
      });
    }
  
}



  return (
    <div>
      <div className='contenedorUsers'>
        <h1>{t('tituloAdminU')}</h1>
          <form>
            <label className='label'>{t('inputU')}</label>
            <input className='inputUsers' type="text" value={first_name} onChange={cargafirst_name} />
            <br/>
            <label className='label'>{t('inputU1')}</label>
            <input className='inputUsers' type="text" value={last_name} onChange={cargalast_name} />
            <br/>
            <label className='label'>{t('inputU2')}</label>
            <input className='inputUsers' type="text" name="username" value={username} onChange={cargausername}/>
            <br/>
            <label className='label'>{t('inputU3')}</label>
            <input className='inputUsers' type="email" name="email" value={email} onChange={cargaEmail}/>
            <br/>
            <label className='label'>{t('inputU4')}</label>
            <input className='inputpass' type="password" name="password" value={password} onChange={cargaPass}/>
            <br/>
            <label className='label'>{t('inputU5')}</label>
            <input className='inputpass' type="password" name="confirm_password" value={confirmPass} onChange={cargaConfirmPass} />
            <br/>
            <button className='btnAgregarUsuarios' onClick={cargaNewUsers}>{t('btnAdU')}</button>
          </form>
      </div>

      
      <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1 className='historial'>{t('registroUsuario')}</h1>
        <div className="container">
  <ul className="ull">
    {users.map((usuario) => (
      <li className="lii" key={usuario.id}>
        {/* Columna izquierda: Datos del Usuario */}
        <div className="user-info">
          <p>{usuario.first_name}</p>
          <p>{usuario.last_name}</p>
          <p>{usuario.username}</p>
          <p>{usuario.email}</p>
        </div>

        {/* Columna derecha: Inputs de Edición y Botones */}
        <div className="edit-section">
          <input
            className="editInput"
            type="text"
            onChange={cargafirst_name_edit}
            placeholder="Editar Nombre"
          />
          <input
            className="editInput"
            type="text"
            onChange={cargalast_name_edit}
            placeholder="Editar Apellido"
          />
          <input
            className="editInput"
            type="text"
            onChange={cargaUsername_edit}
            placeholder="Editar Username"
          />
          <input
            className="editInput"
            type="email"
            onChange={cargaEmail_Edit}
            placeholder="Editar Email"
          />
          <input
            className="editInput"
            type="password"
            onChange={cargaPass_edit}
            placeholder="Editar Contraseña"
          />

          <div className="buttons">
            <button
              className="botonHisto"
              onClick={(e) => cargaEdicion(usuario.id)}
            >
              {t('btnActualizar')}
            </button>
            <button
              className="botonHisto"
              onClick={(e) => cargarDelete(usuario.id)}
            >
              {t('btnEliminar')}
            </button>
          </div>
        </div>
      </li>
    ))}
  </ul>
</div>


    </div>
  )
}

export default FormUsersAdministration
