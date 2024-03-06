
export const getAthletes = async(id: number): Promise<Athletes[]> => {
    const url = `http://localhost:3000/api/athletes/${id}`;
    const res = await fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    const data: Athletes[] = await res.json();
    return data;
};