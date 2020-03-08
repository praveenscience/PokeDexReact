import React, { useEffect } from "react";
import PokeDetails from "./_PokeDetails";
import { GetPokemon } from "../../services/PokeAPI";

const Pokemon = ({ match, Pokemons, setPokemons }) => {
  const PokeId = +match.url.substr(1);
  useEffect(() => {
    if (!Pokemons[PokeId]) {
      GetPokemon(PokeId).then(res => {
        if (res.status === 200 && res.data) {
          let list = [...Pokemons];
          list[PokeId] = res.data;
          setPokemons(list);
        }
      });
    }
    return () => {
      // Somehow cancel the AJAX call!
    };
  });
  return <>{Pokemons[PokeId] && <PokeDetails Data={Pokemons[PokeId]} />}</>;
};

export default Pokemon;
