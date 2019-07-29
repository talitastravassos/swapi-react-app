import React, {useContext, useEffect} from 'react'

export const CharactersCards = (props) => {

    // const { 
    //         action: { getCharacter },
    //         state: { character }} = useContext(SwapiContext)

    const { characters } = props;        

    useEffect(() => {
        console.log("props", characters)
    }, [props])

    return (
        <div className="row">
            {characters.map( character => {
                return( 
                    <div className="col-lg-4 col-md-6">  
                        <div className="card">
                            <div className="card-header">
                            <img src="https://www.logospng.com/images/213/im-225genes-de-personajes-star-wars-para-peques-213723.png" alt="Star Wars Logo" height="62" width="72"></img>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{character.name}</h5>
                                <p class="card-text">Com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional.</p>
                                <a href="#" class="btn btn-warning">Detalhes</a>
                            </div>
                        </div>
                    </div>

                )

            })}
        </div>
    )
}
