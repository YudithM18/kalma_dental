//Obtener datos del servidor
async function GetSpeciality() {

    try {

    
        const response = await fetch('http://127.0.0.1:8000/api/especialidad/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching especialidad');
        }

        const Speciality = await response.json();
        return Speciality;
    } catch (error) {
        console.error('Error fetching especialidad:', error);
        throw error;
    }
}

export default GetSpeciality;