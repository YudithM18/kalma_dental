async function PostUsers(username, password, email, firts_name, last_name, role){

  
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

      const response = await fetch("http://127.0.0.1:8000/api/users/", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(data)
      });

   
      return await response.json();

      
  } catch (error) {
      console.error('Error posting user:', error);
      throw error;
  }
}

export default PostUsers