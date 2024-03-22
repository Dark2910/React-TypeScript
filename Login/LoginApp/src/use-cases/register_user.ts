
const registerUser = async (userData: UserData) => {
    const url = 'http://localhost:3000/api/register';
    const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    });
    const data = await res.json();
    return data;
}

export default registerUser;