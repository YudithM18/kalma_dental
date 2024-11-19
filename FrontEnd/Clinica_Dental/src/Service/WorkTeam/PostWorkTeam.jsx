async function PostWorkTeam(Image, fullname, Speciality, Qualification) {
    try {
     
   
        const DataWorkTeam = { 
            Image,
            fullname, 
            Speciality, 
            Qualification
        
        };

        const response = await fetch("http://localhost:3001/workteam", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(DataWorkTeam)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export default PostWorkTeam