async function DeleteQualification(id) {
    try {
        const tokenData = localStorage.getItem('userData');
        if (!tokenData) {
            throw new Error('Token no encontrado en localStorage');
        }

        const token = JSON.parse(tokenData);
        if (!token || !token.access) {
            throw new Error('Token de acceso no válido');
        }

        const response = await fetch(`http://127.0.0.1:8000/api/titulacion/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.access}`,
            }
        });

        if (!response.ok) {
            const errorData = await response.text();  // Use text if the response body is not JSON
            throw new Error(`Error al eliminar titulación: ${response.statusText}. Detalles: ${errorData}`);
        }

        console.log('Titulación eliminada exitosamente');
        
        // Check if the API returns useful data, if not, just return a confirmation message
        return await response.json().catch(() => ({ message: 'Titulación eliminada exitosamente' }));
    } catch (error) {
        console.error('Error en la solicitud DELETE:', error.message);
        throw error;
    }
}

export default DeleteQualification;
