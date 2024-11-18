async function PostServicios(Image, Servicios, Tratamientos) {
    try {
     
   
        const DataServicios = { 
            Image,
            Servicios,
            Tratamientos
        
        };

        const response = await fetch("http://localhost:3001/servicios", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(DataServicios)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export default PostServicios