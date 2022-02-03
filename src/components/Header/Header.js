import React from 'react';
import logo from '../../logo.svg';
import './style.css';

const Header = () => {
    return(
        <header className="inicial">
            <div><img src={logo} alt="Marvel" alt="Marvel" /></div>
            <h1>Explore o Universo</h1>
            <p>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</p>
        </header>
    );
}

export default Header; 