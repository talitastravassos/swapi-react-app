import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

//import NavBar from './components/NavBar';
import Header from './components/Header';
import Search from './components/Search';
import Result from './components/Result';


const theme = createMuiTheme({
  palette: {
    primary: { main: grey[900] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
  type: 'dark',
  typography: { useNextVariants: true },
});

console.log(theme)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { search: {} }
    this.characterSearch = this.characterSearch
  }
  characterSearch = (search) => { this.setState({ search }, console.log(this.state.search)) }

  render() {

    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <Search getSearch={this.characterSearch} />
        <Result results={this.state.search} />
      </MuiThemeProvider>
    );
  }
}

export default App;
