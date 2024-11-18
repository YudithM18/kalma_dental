async function UpdateTips(Image, Title, Tips, id) {
    try {
     
        const DataTips = { 
            Image,
            Title,
            Tips
        
        };
        const response = await fetch("http://localhost:3001/tips/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
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