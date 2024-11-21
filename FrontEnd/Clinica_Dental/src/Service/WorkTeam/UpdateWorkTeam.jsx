async function UpdateServicios(Image, fullname, Speciality, Qualification, id) {
    try {
     
        const token = localStorage.getItem('token');
        console.log(localStorage.getItem('token'));
        if (!token) {
          throw new Error('Token no encontrado en localStorage');
        }

        const DataWorkTeam = { 
            Image, 
            fullname, 
            Speciality, 
            Qualification
        
        };
        const response = await fetch("http://127.0.0.1:8000/api/workteam/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(DataWorkTeam)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export default UpdateWorkTeam