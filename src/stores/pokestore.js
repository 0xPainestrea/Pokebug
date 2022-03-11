import { writable } from "svelte/store"

export const pokemon = writable([]);

const fetchPokemon = async (num) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`
    const response = await fetch(url)
    const data = await response.json() 
    //  format to json 
    const loadedPokemon = data.results.map((data,index) => {
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }
    });
    pokemon.set(loadedPokemon)
}

fetchPokemon(150);