import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Tabela from '../components/Tabela';
import Busca from '../components/Busca';
import axios from 'axios';


//hash = timestamp (1) + private key + public key convertido em md5
const hash = "21beb75ca82b20e52c8910f3e6599d79"
const apikey = "eb8c78fd1e6e98315a9d42fff3b5c040"

function Inicial() {

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
      const fetch = async()=>{
        if(query===''){
          const result = await axios(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`);

          //console.log(result.data.data.results);
          setItems(result.data.data.results);
          setLoading(false);
        }else{
          const result = await axios(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=${apikey}&hash=${hash}`);
          setItems(result.data.data.results);
          setLoading(false);
        }
      
    }

    fetch()
  },[query])

  return (
    
      <div className="container">
        <Header />
        <Busca search={(q) => setQuery(q)}></Busca>
        <Tabela items={items} isLoading={isLoading} />
      </div>
    
    
  );
}

export default Inicial;


