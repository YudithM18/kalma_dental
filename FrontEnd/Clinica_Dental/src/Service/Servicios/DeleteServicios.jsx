async function DeleteServicios(id) {

    
    try {
        const token = JSON.parse(localStorage.getItem('userData'));

    if (!token) {
      throw new Error('Token no encontrado en localStorage');
    }
        const response = await fetch(`http://127.0.0.1:8000/api/servicios/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer  ${token.access}`,
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export default DeleteServicios ;