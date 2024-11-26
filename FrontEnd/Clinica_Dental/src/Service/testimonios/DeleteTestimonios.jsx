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

        if (!response.ok) {
            throw new Error(`Error al eliminar testimonio: ${response.statusText}`);
        }

        console.log('Testimonio eliminado exitosamente');
        return await response.json();
    } catch (error) {
        console.error('Error en la solicitud DELETE:', error);
        throw error;
    }
}

export default DeleteTestimonials ;