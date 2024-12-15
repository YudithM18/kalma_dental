async function UpdateTips(id, recommendations_url, tips_title, tips_description) {

   
    try { 
        
        const token = JSON.parse(localStorage.getItem('userData'));
    if (!token) {
      throw new Error('Token no encontrado en localStorage');
    }
    
     console.log(id);
     
        const DataTips = { 
            recommendations_url,
            tips_title,
            tips_description
        };
        const response = await fetch(`http://127.0.0.1:8000/api/consejos/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.access}`,
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