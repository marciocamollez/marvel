import React from 'react';
import Personagem from '../Personagem/Personagem';
import './style.css';


const Tabela = ({items, isLoading}) => {
    return isLoading ? <h1>Carregando...</h1> : 
    <section className="personagem--box">
        {
            items.map(item => (
                <Personagem key={item.id} item={item} />
            ))
        }
    </section>
        
    
}

export default Tabela; 
