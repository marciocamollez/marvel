import React, { useEffect, useState } from 'react';
import './style.css';
import Header from '../../components/Header/Header';
import Tabela from '../../components/Tabela/Tabela';
import Busca from '../../components/Busca/Busca';
import Contagem from '../../components/Contagem/Contagem';
import axios from 'axios';


//hash = timestamp (1) + private key + public key convertido em md5
const hash = "21beb75ca82b20e52c8910f3e6599d79"
const apikey = "eb8c78fd1e6e98315a9d42fff3b5c040"

function Inicial() {

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [contagem, setContagem] = useState([]);
  const [order, setOrder] = useState(true);

  useEffect(() => {
      const fetch = async()=>{
        if(query===''){
          const result = await axios(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`);

          //console.log(result.data.data.results);
          setItems(result.data.data.results);
          setLoading(false);
          setContagem(result.data.data.count);
        }else{
          const result = await axios(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=${apikey}&hash=${hash}`);
          setItems(result.data.data.results);
          setLoading(false);
          setContagem(result.data.data.count);
        }


      
    }

    fetch()
  },[query]);

  useEffect(() => {
    const fetch2 = async()=>{

      //Inicialmente deixa marcado a ordenação original que já é por nome
      if(order){
        const result = await axios(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`);
        setItems(result.data.data.results);
        setOrder(true);
        setLoading(false);

        //Caso a caixa seja desmarcada, faz a requisição para ser ordenado por item modificado
      }else{
        const result = await axios(`https://gateway.marvel.com/v1/public/characters?orderBy=modified&ts=1&apikey=${apikey}&hash=${hash}`);
        setItems(result.data.data.results);
        setOrder(false);
        setLoading(false);
      }
    
  }

  fetch2()
  },[order]);

  return (
    
      <div className="container">
        <Header />
        <Busca search={(q) => setQuery(q)}></Busca>

        <div className="widget">
          <Contagem contagem={contagem} isLoading={isLoading} />

          <span className="personagem--ordenacao">
              <span><img src="/ic_heroi.svg" alt="Ordenar" /></span>
              <span className="personagem--ordenacao__check">
                  <p>Ordenar por nome A-Z:</p> 
                  <input id="checkbutton" type="checkbox" defaultChecked={order} onChange={() => setOrder(!order)} /><label htmlFor="checkbutton"></label>
                 
              </span>
          </span>
        </div>

        
        <Tabela items={items} isLoading={isLoading} />
      </div>
    
    
  );
}

export default Inicial;


