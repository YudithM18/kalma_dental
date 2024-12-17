async function DeleteTestimonials(id) {
    try {
        const token = JSON.parse(localStorage.getItem('userData'));

        if (!token) {
            throw new Error('Token no encontrado en localStorage');
        }

        const response = await fetch(`http://127.0.0.1:8000/api/testimonios/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.access}`,
            }
        });

        // Si la respuesta tiene un código de estado 204 (sin contenido), no se intenta parsear JSON
        if (!response.ok) {
            throw new Error(`Error al eliminar testimonio: ${response.statusText}`);
        }

        if (response.status === 204) {
            console.log('Testimonio eliminado exitosamente (sin contenido en la respuesta)');
            return { message: 'Testimonio eliminado exitosamente' }; // Devolver un mensaje en lugar de parsear JSON
        }

        // Si la respuesta contiene contenido, procesamos el JSON
        const data = await response.json();
        console.log('Testimonio eliminado exitosamente:', data);
        return data;

    } catch (error) {
        console.error('Error en la solicitud DELETE:', error);
        throw error;
    }
}

export default DeleteTestimonials;
