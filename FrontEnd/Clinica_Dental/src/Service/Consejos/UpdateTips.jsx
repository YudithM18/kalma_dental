async function UpdateTips(recommendationURL, title, tips, id) {
    try {
     
        const DataTips = { 
            recommendationURL,
            title,
            tips
        
        };
        const response = await fetch("http://127.0.0.1:8000/api/tips/"+id, {
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