import React from 'react';
import { Header } from "./components/Header";
import 'boxicons';
import {BrowserRouter as Router} from "react-router-dom";
import { Paginas } from './components/Paginas';
import {DataProvider} from "./context/Dataprovider.js";

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header /> 
      <Paginas />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
 