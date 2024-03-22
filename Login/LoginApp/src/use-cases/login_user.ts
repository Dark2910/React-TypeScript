
const loginUser = async (userData: UserData) => {
    const url = 'http://localhost:3000/api/login';
    const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    });
    const data = await res.json();
    return data;
}

export default loginUser;