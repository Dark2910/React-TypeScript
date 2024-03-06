import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css';
import { useEffect, useState } from 'react';
import { getSports } from './use-cases/sports/get-sports.js';
import { getAthletes } from './use-cases/athletes/get-athletes.js';
import Table from './components/Table/Table.js';


function App() {
  const [sportData, setSportData] = useState<Sport[]>([]);
  const [athletesData, setAthletesData] = useState<Athletes[]>([]);

  const fetchSportInformation = async(): Promise<void> => {
    const result = await getSports();
    setSportData(result);
  };

  const fetchAthletesInformation = async(): Promise<void> => {
    const result = await getAthletes(3);
    setAthletesData(result);
  };

  useEffect(() => {
    fetchSportInformation();
    fetchAthletesInformation();
  }, []);
  
  return (
    <div className='container'>
      <Table data={sportData}/>
      <Table data={athletesData}/>
    </div>
  )
}

export default App
