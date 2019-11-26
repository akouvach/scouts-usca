import React from 'react';
import './App.css';
import {Menu} from './componentes/menu.js';

function App(props) {
  return (
    <div>
    <Menu usuario={props.usuario} />
    <h1>Titulo de prueba</h1>
    </div>
  );
}

export default App;
