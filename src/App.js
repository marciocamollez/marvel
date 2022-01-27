import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Tabela from './components/Tabela';
import axios from 'axios';

//hash = timestamp (1) + private key + public key convertido em md5
const hash = "21beb75ca82b20e52c8910f3e6599d79"

function App() {

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async()=>{
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=eb8c78fd1e6e98315a9d42fff3b5c040&hash=${hash}`);

      console.log(result.data.data.results);
      setItems(result.data.data.results);
      setLoading(false);
    }

    fetch()
  },[])

  return (
    <div className="container">
      <Header />
      <Tabela items={items} isLoading={isLoading} />
      aa
    </div>
  );
}

export default App;
