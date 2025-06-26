import React from 'react';
import { Header } from './components/header/index';
import { ProductosLista } from './components/productos/index';
import 'boxicons';


function App() {
  return (
    <div className="App">
      <Header />
      <ProductosLista />
    </div>
  );
}

export default App;
