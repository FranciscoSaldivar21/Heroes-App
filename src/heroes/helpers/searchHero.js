import { heroes } from "../data/heroes";

export const searchHero = ( name ) => {
    name = name.toLowerCase().trim();

    if(name.length === 0) return [];
    
    const result = heroes.filter(heroe => heroe.superhero.toLowerCase().includes(name));
    return result;
}