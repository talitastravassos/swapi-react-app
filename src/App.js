import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Result from './components/Result';
//import Loader from './components/Loader';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { search: {}, isSearching: false }
    this.characterSearch = this.characterSearch

    this.isSearching = () => {
      if(this.state.search.count >= 1){
        this.setState( {isSearching: true }, console.log(this.state.isSearching) )}
      }
  }
  characterSearch = (search) => { 
    this.setState({ search }, 
    console.log(this.state.search))
    this.isSearching();
    }

  render() {
    const isResult = this.state.isSearching;
    let result;

    if(isResult){
      result = <Result results={this.state.search} />
    } else {
      //result = <Loader />
    }

    return (
      <div className="App">
        <Header />
        <Search />
        {result}
      </div> 
    );
  }
}

export default App;
