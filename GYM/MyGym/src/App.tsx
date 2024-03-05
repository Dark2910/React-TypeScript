import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { useEffect, useState } from 'react';
import { getSports } from './use-cases/sports/get-sports.js'
import './App.css';
import Table from './components/Table/Table.js';


function App() {
  const [sportsData, setSportsData] = useState<Sport[] | null>(null);

  const fetchInformation = async () => {
    const result = await getSports();
    setSportsData(result);
  };

  useEffect(() => {
    fetchInformation();
  }, []);

  console.table(sportsData);

  const tableHeaders = sportsData?.flatMap((sport) => Object.keys(sport)) || [];
  const tableData = sportsData || [];

  return (
    <div className='container'>
      <Table tableHeaders={tableHeaders} tableData={tableData}/>
    </div>
  )
}

export default App
