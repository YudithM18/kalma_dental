import React, { useState }  from 'react'
import '../Styles/FormUsersAdmi.css'
import PostUsers from '../Service/Usuarios/PostUsers'


function FormUsersAdministration() {
  const [users, setUsers] = useState([])
  const [username, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firts_name, setFname] = useState('')
  const [last_name, setLname] = useState('')

  function cargausername(event) {
    setName(event.target.value);
}

function cargaEmail(event) {
    setEmail(event.target.value);
}

function cargaPass(event) {
    setPassword(event.target.value);
}

function cargafirst_name(event) {
  setFname(event.target.value);
}

function cargalast_name(event) {
  setLname(event.target.value)
}
function cargaNewUsers() {
  PostUsers(username, password, email, firts_name, last_name); 
}
  return (
    <div>
      <div className='contenedorUsers'>
        <h1>Users Administration</h1>
          <form>
            <label className='label'>First name:</label>
            <input className='inputUsers' type="text" value={firts_name} onChange={cargafirst_name} />
            <br/>
            <label className='label'>Last name:</label>
            <input className='inputUsers' type="email" value={email} onChange={cargalast_name} />
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
            <input className='inputpass' type="password" name="confirm_password" />
            <br/>
            <button className='btnAgregarUsuarios' onClick={cargaNewUsers}>Add</button>
          </form>
      </div>
    </div>
  )
}

export default FormUsersAdministration
