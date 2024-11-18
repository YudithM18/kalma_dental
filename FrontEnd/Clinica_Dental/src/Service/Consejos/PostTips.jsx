async function PostTips(Image, Title, Tips) {
    try {
     
   
        const DataTips = { 
            Image,
            Title,
            Tips
        
        };

        const response = await fetch("http://localhost:3001/tips", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(DataTips)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export default PostTips