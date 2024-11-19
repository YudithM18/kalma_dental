async function PostVideoBlog(video, titlevideo) {
    try {
     
   
        const DataContent = { 
            video,
            titlevideo
        };

        const response = await fetch("http://127.0.0.1:8000/api/video_blog/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(DataContent)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export default PostVideoBlog;