import React, {useContext, useEffect} from 'react'

export const CharacterCard = (props) => {

    // const { 
    //         action: { getCharacter },
    //         state: { character }} = useContext(SwapiContext)

    const { characters } = props;        

    useEffect(() => {
        console.log("props", characters)
    }, [props])

    return (
        <div>
            {characters.map( character => {
                return( 
                    <div className="card">
                        <div className="card-header">
                        {character.name}
                        </div>
                        {/* <div class="card-body">
                            <h5 class="card-title">Título especial</h5>
                            <p class="card-text">Com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional.</p>
                            <a href="#" class="btn btn-primary">Visitar</a>
                        </div> */}
                    </div>

                )

            })}
        </div>
    )
}
