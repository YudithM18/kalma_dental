//Actualizar completamente datos existentes en el servidor
async function updateProductos(username, email, password, id) {
    try {
     
        const DataProducts = { 
            username, 
            email, 
            password
        
        };
        const response = await fetch("http://localhost:3001/api/token/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(DataProducts)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export default updateUsers 