async function UpdateSpecialists(id, nuevosDatosWT) {
    try {
     
        const token = JSON.parse(localStorage.getItem('userData'));
        
        if (!token) {
          throw new Error('Token no encontrado en localStorage');
        }

        const DataWorkTeam = { 
            specialists_url: nuevosDatosWT.imagen,
            full_name : nuevosDatosWT.nombreCompleto,
            id_qualification: nuevosDatosWT.Id_qualification,
            id_speciality: nuevosDatosWT.Id_speciality,
        };

        console.log(DataWorkTeam);
        
        const response = await fetch(`http://127.0.0.1:8000/api/especialistas/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.access}`,
            },
            body: JSON.stringify(DataWorkTeam)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export default UpdateSpecialists