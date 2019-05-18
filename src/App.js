import React from 'react';
import './App.css';

import Conversor from './components/Conversor';

function App() {
  return (
    <div className="app">
      <Conversor moedaA="USD" moedaB="BRL" />
    </div>
  );
}

export default App;