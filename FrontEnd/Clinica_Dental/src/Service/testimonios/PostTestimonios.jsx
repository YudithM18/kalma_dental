async function PostTestimonios(fullname, date, testimony) {
    try {
     
        const token = JSON.parse(localStorage.getItem('userData'));

        if (!token) {
          throw new Error('Token no encontrado en localStorage');
        }
   
        const DataTestimonials = { 
            fullname,
            date,
            testimony
        
        };

        const response = await fetch("http://127.0.0.1:8000/api/testimonios/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer  ${token.access}`,
            },
            body: JSON.stringify(DataTestimonials)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export default PostTestimonios