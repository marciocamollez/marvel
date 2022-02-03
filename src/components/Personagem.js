import React from 'react';
import LikeButton from './LikeButton';

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
                <Link to={`/personagem/${item.id}`}>
                    <img src={item.thumbnail.path + "/standard_fantastic.jpg"} alt={item.name} />
                </Link>
                <div className="personagem--barra"></div>
            </div>

            <div className="personagem--nomes">
                <div><Link to={`/personagem/${item.id}`}><h2>{item.name}</h2></Link></div>
                <LikeButton />
            </div>
        </div>
            
    );
}

export default Personagem; 