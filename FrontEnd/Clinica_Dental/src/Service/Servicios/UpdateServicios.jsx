async function UpdateServicios(Servicios, Tratamientos, Image, id) {
    try {
     
        const DataServicios = { 
            Servicios,
            Tratamientos,
            Image
        
        };

        const token = localStorage.getItem('token');

        if (!token) {
          throw new Error('Token no encontrado en localStorage');
        }
        
        const response = await fetch("http://127.0.0.1:8000/api/servicios/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(DataServicios)
        });
        
        
    
     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export default UpdateServicios