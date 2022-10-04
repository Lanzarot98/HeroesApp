import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
    if (alter_ego === characters) return (<></>);
    return <p>{ characters }</p>;
}

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `./assets/heroes/${ id }.jpg`;
    // const charactersByHero = <p>{ characters }</p>;

  return (
    <div className='animate__animated animate__fadeIn flex-column flex-md-row d-flex justify-content-center'>
        <div className='card'>

        <div className="row no-gutters">
            <div className="col-6">
                <img src={ heroImageUrl } className='card-img' alt={ superhero } />
            </div>
            
            <div className="col-6">
                <div className="card-body p-0">
                    <h5 className='card-title'>{ superhero }</h5>
                    <p className='card-text'>{ alter_ego }</p>
                    {/* {
                        ( alter_ego !== characters ) && (charactersByHero)
                        ( alter_ego !== characters ) && (<p>{characters}</p>)
                    } */}
                    <CharactersByHero alter_ego={ alter_ego } />
                    {/* characters={ characters } si quiero envío los caracteres dentro*/}
                    <p className='card-text'>
                        <small className='text-muted'>{ first_appearance }</small>
                    </p>
                    <Link to={`/hero/${ id }`}>More information</Link>
                </div>
            </div>

        </div>

        </div>
    </div>
  )
}
