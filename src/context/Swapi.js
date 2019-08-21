import React, { Component } from 'react'
import 'whatwg-fetch';

export const SwapiContext = React.createContext({})

export default class SwapiProvider extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            characters: [],
            homeworld: {},
            selectedCharacter: {}
        }

    }

    selectCharacter = (character) => {
        this.setState({
            selectedCharacter: character
        })
    }

    getSearch = (name) => {
        if(name !== ""){
            fetch(`https://swapi.co/api/people/?search=${name}`)
            .then( response => response.json() )
            .then( json => this.setState({ characters: json.results }, ( ) => {
                console.log("Result: ", this.state.characters)
                }))

        }
        
    }

    getCharacter = (url) => {
      
        fetch(url)
            .then( response => response.json() )
            .then( json => this.setState({ selectedCharacter: json }, ( ) => {
                console.log("character: ", this.state.selectedCharacter)
                }))
        
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
              getSearch: this.getSearch,
              getHomeWorld: this.getHomeWorld,
              selectCharacter: this.selectCharacter,
              getCharacter: this.getCharacter
            }
          };
      
        return (
            <SwapiContext.Provider value={value}>
                {this.props.children}
            </SwapiContext.Provider>
        )

    }
}
