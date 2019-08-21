import React, { useEffect, useContext, useState } from 'react'
import { SwapiContext } from "../../context/Swapi";
import { Link } from 'react-router-dom'

export const CharactersCards = (props) => {

    const { 
            action: { getCharacter, getHomeWorld },
            state: { character }} = useContext(SwapiContext)

    const { characters } = props;        

    useEffect(() => {
        console.log("props", characters)
    }, [props])

    return (
        <div className="row">
            {characters.map( character => {
                return( 
                    <div className="col-lg-4 col-md-6" key={character.url}>  
                        <div className="card">
                            <div className="card-header">
                            <img src="https://www.logospng.com/images/213/im-225genes-de-personajes-star-wars-para-peques-213723.png" alt="Star Wars Logo" height="62" width="72"></img>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title h2">{character.name}</h5>
                                <p className="card-text">
                                <strong>Height:</strong> {character.height} {"//"} <strong>Mass:</strong> {character.mass}
                                </p>
                                <p className="card-text">
                                <strong>Hair Color:</strong> {character.hair_color} {"//"} <strong> Skin Color:</strong> {character.skin_color} {"//"} <strong> Eye Color:</strong> {character.eye_color}
                                </p>
                                <p className="card-text">
                                <strong> Birth Year:</strong> {character.birth_year}
                                </p>
                                <p className="card-text">
                                <strong> Gender:</strong> {character.gender}
                                </p>
                                <p className="card-text">
                                    {/* <Homeworld homeworld={character.homeworld}/> */}
                                </p>
                               

                                <Link to={`/characterdetails/${character.name}`} className="btn btn-warning" >Detalhes</Link>
                            </div>
                        </div>
                    </div>

                )

            })}
        </div>
    )
}



const Homeworld = (props) => {

    const [homeworld, setHomeworld] = useState("")

    const { 
        action: { getCharacter, getHomeWorld },
        state: { character }} = useContext(SwapiContext)

    useEffect(() => {
        setHomeworld(getHomeWorld(props.homeworld))
    }, [])    

    return (
        <p>
            <strong> HomeWorld</strong> {homeworld}   
        </p>
    )
}

