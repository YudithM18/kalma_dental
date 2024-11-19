async function UpdateServicios(Image, fullname, Speciality, Qualification, id) {
    try {
     
        const DataWorkTeam = { 
            Image, 
            fullname, 
            Speciality, 
            Qualification
        
        };
        const response = await fetch("http://localhost:3001/workteam/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
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