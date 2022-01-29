import React from 'react';

import Inicial from './pages/Inicial';
import DetalhePersonagem from './pages/DetalhePersonagem';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";

function App() {

  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Inicial} />
          <Route path="/personagem/:id" component={DetalhePersonagem} />
        </Switch>
    </Router>
    
  );
}

export default App;
