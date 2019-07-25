import React, {useContext, useEffect} from 'react'
import { SwapiContext } from "../context/Swapi";
import { CharacterCard } from "./Cards/CharacterCard";

const Result = () => {

  const { 
    action: { getCharacter },
    state: { characters }} = useContext(SwapiContext)

  useEffect(() => {
    console.log("results ", characters)
  }, [characters])  

  return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col">
            <CharacterCard characters={characters}/>
          </div> 
        </div>
      </div>
  )
}

export default Result