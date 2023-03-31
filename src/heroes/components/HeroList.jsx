import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { Hero } from "./Hero"


export const HeroList = ({publisher}) => {
    const dcHeroes = useMemo( () => getHeroesByPublisher(publisher), [publisher] );
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            dcHeroes.map(hero =>  (
                <Hero key={hero.id} hero={hero} />
            ))
        }
    </div>
  )
}
