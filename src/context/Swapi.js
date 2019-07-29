import React, { Component } from 'react'
import 'whatwg-fetch';

export const SwapiContext = React.createContext({})

export default class SwapiProvider extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            characters: [],
            homeworld: {}
        }

    }

    getCharacter = (name) => {
        if(name !== ""){
            fetch(`https://swapi.co/api/people/?search=${name}`)
            .then( response => response.json() )
            .then( json => this.setState({ characters: json.results }, ( ) => {
                console.log("Result: ", this.state.character)
                }))

        }
        
    }

    getHomeWorld = (url) => {
        
    fetch(url)
      .then( response => response.json() )
      .then( json => this.setState({ homeworld: json } ))

        return this.state.homeworld.name
    }
    
    render() {
        const value = {
            state: { ...this.state },
            action: {
              getCharacter: this.getCharacter,
              getHomeWorld: this.getHomeWorld
            }
          };
      
        return (
            <SwapiContext.Provider value={value}>
                {this.props.children}
            </SwapiContext.Provider>
        )

    }
}
