import { heroes } from "../data/heroes";



export const getHeroesByName = ( name = '' ) => {

    name = name.toLowerCase().trim();

    if ( name.length === 0 ) return [];
    // si pasa solo ocupamos filtrar nuestros arreglos o el arreglo de heroes, y hay que filtrarlo basado en el name
    return heroes.filter(
        (hero) => hero.superhero.toLowerCase().includes( name ) // entonces este includes lo que hace es que va a dar verdadero si coincide al menos de toda la palabra name con el nombre del heroe (name puede ser una sola letra recordarlo)
    )


}