import Axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/";

export const GetInitialPokemons = () =>
  Axios.get(`${baseUrl}pokemon/?limit=100`);
export const GetPokemons = url => Axios.get(url);
export const GetPokemon = PokeId => Axios.get(`${baseUrl}pokemon/${PokeId}/`);
