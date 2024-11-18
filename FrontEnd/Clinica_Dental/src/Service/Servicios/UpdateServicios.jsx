async function UpdateServicios(Servicios, Tratamientos, Image, id) {
    try {
     
        const DataServicios = { 
            Servicios,
            Tratamientos,
            Image
        
        };
        const response = await fetch("http://localhost:3001/servicios/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
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