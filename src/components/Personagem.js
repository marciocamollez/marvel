import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
} from "react-router-dom";

const Personagem = ({item}) => {
    return(
        
        <div className="personagem--item">
            <div>
                <img src={item.thumbnail.path + "/standard_fantastic.jpg"} alt={item.name} />
                <div className="personagem--barra"></div>
            </div>

            <div>
                <Link to={`/personagem/${item.id}`}><h2>{item.name}</h2></Link>
            </div>
        </div>
            
    );
}

export default Personagem; 