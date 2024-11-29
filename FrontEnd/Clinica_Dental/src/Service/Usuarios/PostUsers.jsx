async function PostUsers(first_name, last_name, username, password, email){

  
    const token = JSON.parse(localStorage.getItem('userData'));
      if (!token) {
        throw new Error('Token no encontrado en localStorage');
      }
      
 
      const data = { 
      username,
      email,
      password,
      first_name, 
      last_name,
      role : 'editor'
      };
      
      console.log(data);
      
      const response = await fetch("http://127.0.0.1:8000/api/users/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.access}`
        },
        body: JSON.stringify(data)
    });
    
    const dataResponse = await response.json();
    console.log(dataResponse);
    
    return dataResponse; // Elimina la segunda llamada a response.json()
  }


export default PostUsers