//Actualizar completamente datos existentes en el servidor
async function updateUsers(id, first_name, last_name, username, password, email) {
    

    
    try {

        
        const token = JSON.parse(localStorage.getItem('userData'));

      if (!token) {
        throw new Error('Token no encontrado en localStorage');
      }
     
        const data = {
            first_name, 
            last_name, 
            username, 
            password, 
            email,
            role: 'editor'
        };
console.log(data);

        const response = await fetch(`http://127.0.0.1:8000/api/users/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.access}`,
            },
            body: JSON.stringify(data)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export default updateUsers 