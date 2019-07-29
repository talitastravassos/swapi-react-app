import React, {useContext, useEffect} from 'react'
import { SwapiContext } from "../context/Swapi";
import { CharactersCards } from "./Cards/CharacterCard";

const Result = () => {

  const { 
    //action: { getCharacter },
    state: { characters }} = useContext(SwapiContext)

  useEffect(() => {
    console.log("results ", characters)
  }, [characters])  

  return (
      <div className="container-fluid">
          <CharactersCards characters={characters}/>
      </div>
  )
}

export default Result