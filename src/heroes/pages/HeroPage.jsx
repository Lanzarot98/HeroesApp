import { useParams } from "react-router-dom";
import { getHeroById } from "../helpers";


export const HeroPage = () => {

  const { id } = useParams();
  
  const hero = getHeroById( id );

  if ( !hero) {
    return (
      <div className="container">
        <h1 className="alert alert-info">
        🦸‍♀️ 404 - Hero not found 🦸‍♂️</h1>
      </div>
      // ó puedo retornar esto:
      // <Navigate to="/marvel" hay que importar el navigate/>
    )
  }

  console.log(hero);

  return (
    <>
      <h1>{hero.superhero}</h1>
    </>
  )
}
