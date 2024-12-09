async function GetVideoBlog() {
    try {
    
        const response = await fetch('http://127.0.0.1:8000/api/video_blog/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const VideoBlog = await response.json();
        return VideoBlog;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export default GetVideoBlog;