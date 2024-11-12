// Enviar datos al servidor
async function postUsers(username, email, password) {
    try {
     
        const userData = { 
            username,
            email,
            password
        
        };

        const response = await fetch("http://127.0.0.1:8000/api/token", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export default postUsers