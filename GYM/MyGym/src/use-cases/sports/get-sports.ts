
export const getSports = async(): Promise<Sport[]> => {
    const url: string = 'http://localhost:3000/api/sports';
    const res: Response = await fetch(url,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    const data: Sport[] = await res.json();
    return data;
};