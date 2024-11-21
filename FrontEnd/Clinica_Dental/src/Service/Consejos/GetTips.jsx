async function GetTips() {

   
    
    try { 
        const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Token no encontrado en localStorage');
    }
        const response = await fetch('http://127.0.0.1:8000/api/tips/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });

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

export default GetTips;