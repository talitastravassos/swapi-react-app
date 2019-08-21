import React, {useContext, useEffect} from 'react'
import { SwapiContext } from "../../context/Swapi";

const CharacterDetails = (props) => {

    const { 
        action: { getCharacter },
        state: { selectedCharacter }} = useContext(SwapiContext)

    useEffect(() => {
        getCharacter(props.location.query.url)
        //console.log(props.location.query.url)
    }, [])    

    return (
        <div>
          <h1 className="text-white">Character Details</h1>  
        </div>
    )
}

export default CharacterDetails
