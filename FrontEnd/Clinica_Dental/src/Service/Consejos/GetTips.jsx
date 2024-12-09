async function GetTips() {

    try { 

        const response = await fetch('http://127.0.0.1:8000/api/consejos/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const tips = await response.json();
        return tips;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export default GetTips;