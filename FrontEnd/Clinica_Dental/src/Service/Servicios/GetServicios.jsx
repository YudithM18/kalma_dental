async function GetServicios() {

    try {
        
        const token = JSON.parse(localStorage.getItem('userData'));



    if (!token) {
      throw new Error('Token no encontrado en localStorage');
    }
        const response = await fetch('http://127.0.0.1:8000/api/servicios/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer  ${token.access}`,
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching services');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export default GetServicios;