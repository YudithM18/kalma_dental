import React from 'react'

function FormUsersAdministration() {
  return (
    <div>
      <div>
        <h1>Users Administration</h1>
          <form>
            <label>Username:</label>
            <input type="text" name="username" />
            <br/>
            <label>Password:</label>
            <input type="password" name="password" />
            <br/>
            <label>Confirm Password:</label>
            <input type="password" name="confirm_password" />
            <br/>
            <input type="submit" value="Submit" />
          </form>
      </div>
    </div>
  )
}

export default FormUsersAdministration