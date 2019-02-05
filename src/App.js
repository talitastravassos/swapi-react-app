import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Header from './components/Header';
import Search from './components/Search';
import Result from './components/Result';
import Loader from './components/Loader';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#ffff00' }, 
    secondary: { main: '#11cb5f' },
  },
  type: 'dark',
  typography: { useNextVariants: true },
});

console.log(theme)

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

    componentDidUpdate(prevProps, prevState, snapshot){
      
    }

  render() {
    const isResult = this.state.isSearching;
    let result;

    if(isResult){
      result = <Result results={this.state.search} />
    } else {
      result = <Loader />
    }

    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <Search getSearch={this.characterSearch.bind(this)} />
        {result}
      </MuiThemeProvider>
    );
  }
}

export default App;
