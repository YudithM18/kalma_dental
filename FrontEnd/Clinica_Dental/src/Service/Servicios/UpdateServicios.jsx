async function UpdateServicios(id, nuevosDatos) {
    try {
     
        const DataServicios = { 
            services_url: nuevosDatos.imagen, 
            service_name: nuevosDatos.name,
            specialists: nuevosDatos.IdSpecialists,
            description: nuevosDatos.descripcion,
        };

        const token = JSON.parse(localStorage.getItem('userData'));

        if (!token) {
          throw new Error('Token no encontrado en localStorage');
        }
        
        const response = await fetch(`http://127.0.0.1:8000/api/servicios/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer  ${token.access}`,
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