//Obtener datos del servidor
async function getUsers() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        
        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export default getUsers;