import React from 'react'

class Result extends React.Component {
  state = {
    characters: []
  };
  
  
  // componentDidMount(){
  //   //var name = 'luke'
  //   fetch(`https://swapi.co/api/people/?search=${this.props.setSearch}`)
  //   .then( response => response.json() )
  //   .then( json => this.setState({ characters: json }, ( ) => console.log("Result: ", this.state.characters) ) )
  // }
  
  render() {
    console.log("Result component", this.props.results)
  return (
    <div className="App-div">
      
    </div>
  )
}
}

export default Result;
