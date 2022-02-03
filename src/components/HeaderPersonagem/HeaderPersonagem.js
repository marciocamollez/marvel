import React from 'react';
import './style.css';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

const HeaderPersonagem = () => {
    return(
        <header className="header--personagem">
            <div><Link to="/"><img src="/logo_menor.svg" alt="Marvel" alt="Marvel" /></Link></div>
        </header>
    );
}

export default HeaderPersonagem; 