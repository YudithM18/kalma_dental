//Actualizar completamente datos existentes en el servidor
async function updateUsers(username, password, email, firts_name, last_name, role, id) {
    
    try {

        
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('Token no encontrado en localStorage');
      }
     
        const data = { 
            username, 
            password, 
            email, 
            firts_name, 
            last_name, 
            role
        };
        const response = await fetch("http://127.0.0.1:8000/api/users/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
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