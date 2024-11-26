import React, { useState, useEffect }  from 'react'
import '../Styles/FormUsersAdmi.css'
import PostUsers from '../Service/Usuarios/PostUsers'
import getUsers from '../Service/Usuarios/getUsers'
import DeleteUsers from '../Service/Usuarios/DeleteUsers'
import UpdateUsers from '../Service/Usuarios/updateUsers'
import updateUsers from '../Service/Usuarios/updateUsers'


function FormUsersAdministration() {
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
    setConfirmPass(event.target.value);
}

function cargafirst_name(event) {
  setFname(event.target.value);
}

function cargalast_name(event) {
  setLname(event.target.value)
}
function cargaNewUsers() {
  // Validación de contraseñas
  if (password !== confirmPass) {
    // Si las contraseñas no coinciden, puedes mostrar un mensaje de error
    alert("Las contraseñas no coinciden. Por favor, verifica e intenta nuevamente.");
    return; // No continuar con la creación del usuario si las contraseñas no coinciden
  }
  
  // Aquí iría el código para hacer el POST si las contraseñas coinciden
  PostUsers(first_name, last_name, username, password, email);
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
  await DeleteUsers(id)
  const valorEncontrar = users.filter(users => users.id !== id);
  setUsers([...valorEncontrar])
}


const cargaEdicion = async (id) => {

  const UsersOriginal = users.find(users => users.id === id);

  if (!UsersOriginal) return;


  const nuevosDatos = {
    username: username_edit || UsersOriginal.username, 
    password: password_edit || UsersOriginal.password,  
    email: email_edit || UsersOriginal.email, 
    first_name: first_name_edit || UsersOriginal.first_name,  
    last_name: last_name_edit || UsersOriginal.last_name, 
  };
  

  await updateUsers(id, nuevosDatos.first_name, nuevosDatos.last_name, nuevosDatos.username, nuevosDatos.password, nuevosDatos.email);
  

  const usersactualizados = users.map(users => 
    users.id === id ? { ...users, ...nuevosDatos } : users
  );

  setUsers(usersactualizados);
  
  // Resetea los campos de entrada
  setFname('');
  setLname('');
  setName('');
  setEmail('');
  setPassword('');
}

  return (
    <div>
      <div className='contenedorUsers'>
        <h1>Users Administration</h1>
          <form>
            <label className='label'>First name:</label>
            <input className='inputUsers' type="text" value={first_name} onChange={cargafirst_name} />
            <br/>
            <label className='label'>Last name:</label>
            <input className='inputUsers' type="text" value={last_name} onChange={cargalast_name} />
            <br/>
            <label className='label'>Username:</label>
            <input className='inputUsers' type="text" name="username" value={username} onChange={cargausername}/>
            <br/>
            <label className='label'>E-mail:</label>
            <input className='inputUsers' type="email" name="email" value={email} onChange={cargaEmail}/>
            <br/>
            <label className='label'>Password:</label>
            <input className='inputpass' type="password" name="password" value={password} onChange={cargaPass}/>
            <br/>
            <label className='label'>Confirm Password:</label>
            <input className='inputpass' type="password" name="confirm_password" value={confirmPass} onChange={cargaPass} />
            <br/>
            <button className='btnAgregarUsuarios' onClick={cargaNewUsers}>Add</button>
          </form>
      </div>

      
      <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1 className='historial'>Registered Users</h1>
        <div >
        <ul className='ul'>
          {users.map((usuario) => (
            <li className='li' key={usuario.id}>
              <br />
              {usuario.first_name} <input onChange={cargafirst_name_edit} type="text"  /> <br />
              {usuario.last_name} <input  className='editInp1' type="text" onChange={cargalast_name_edit} /> <br /> 
              {usuario.username} <input className='editInp' type="text" onChange={cargaUsername_edit} /> <br />
              {usuario.email} <input className='editInp' type="email" onChange={cargaEmail_Edit} /> <br />
              {usuario.password} <input className='editInp' type="text" onChange={cargaPass_edit } />
              <br />
              <button className='botonHis' onClick={e=>cargaEdicion(usuario.id)}>Actualizar</button>
              <button className='botonHis' onClick={e => cargarDelete(usuario.id)}>Eliminar</button>
              </li>
          ))}
        </ul>
        </div>

    </div>
  )
}

export default FormUsersAdministration
