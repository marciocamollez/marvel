import React from 'react';
import './style.css';

const Contagem = ({contagem, isLoading}) => {

    return(
        <span className="personagem--count">

            {isLoading ? "" : <p>Encontrados {contagem} heróis</p>}
        </span>

    );
}

export default Contagem; 