import React from 'react'
import { getHeroesByPublisher } from '../helpers'

export const HeroList = ({ publisher }) => {
    
    const heroes = getHeroesByPublisher( publisher );

    return (

        <ul>
            {
                heroes.map((Hero) =>
                    <li key={ Hero.id }>
                        { Hero.superhero }
                    </li>    
                )
            }
        </ul>

    )
}
