// Enviar datos al servidor
async function postUsers(username, password) {
    try {
     
        const userData = { 
            username,
            password
        
        };

        const response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        const data = await response.json();
        console.log(data.access);
        
        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export default postUsers