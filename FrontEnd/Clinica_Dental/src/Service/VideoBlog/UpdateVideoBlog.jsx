async function UpdateVideoBlog(video, titlevideo, id) {
    try {
     
        const DataContent = { 
            video,
            titlevideo
        };
        const response = await fetch("http://127.0.0.1:8000/api/video_blog/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(DataContent)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export default UpdateVideoBlog;