//Obtener datos del servidor
async function GetQualification() {

    try {
       
    
        const response = await fetch('http://127.0.0.1:8000/api/titulacion/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const qualification = await response.json();
        return qualification;
    } catch (error) {
        console.error('Error fetching titulacion:', error);
        throw error;
    }
}

export default GetQualification;