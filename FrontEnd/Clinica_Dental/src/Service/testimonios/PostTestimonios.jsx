async function PostTestimonios(Name, Date, Testimonials) {
    try {
     
   
        const DataTestimonials = { 
            Name,
            Date,
            Testimonials
        
        };

        const response = await fetch("http://localhost:3001/testimonios", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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