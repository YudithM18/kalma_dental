async function PostUsers(username, password, email, firts_name, last_name, role){
  try {
   
 
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
              'Content-Type': 'application/json'
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