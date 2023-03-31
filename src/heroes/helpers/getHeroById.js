import { heroes } from "../data/heroes";

export const getHeroById = ( id ) => {

    const result = heroes.find(heroe => heroe.id === id);
    return result;
}