import React, { useContext } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Result from './components/Result';

import { SwapiContext } from "./context/Swapi";

const App = () => {
  
  const { 
    state: { characters }} = useContext(SwapiContext)

  return (
      <div className="App">
         <Header />
         <Search />
         { (characters.length) ? <Result/> : "" }
      </div> 
  )
}

export default App
