async function UpdateTips(recommendationURL, title, tips, id) {

   
    try { const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Token no encontrado en localStorage');
    }
    
     
        const DataTips = { 
            recommendationURL,
            title,
            tips
        
        };
        const response = await fetch("http://127.0.0.1:8000/api/tips/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(DataTips)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export default UpdateTips