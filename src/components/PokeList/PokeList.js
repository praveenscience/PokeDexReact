import React from "react";
import ContainerRow from "../Helpers/ContainerRow";
import PokeListItem from "./_PokeListItem";

const PokeList = ({ List, Pokemons }) => {
  return (
    <div className="PokeList">
      <ContainerRow fluid={true}>
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="mb-3">PokemonList</h2>
          <div className="list-group">
            {List &&
              List.map((list, key) => (
                <PokeListItem
                  key={key}
                  {...{ ...list, Available: !!Pokemons[+list.Link.substr(1)] }}
                />
              ))}
          </div>
        </div>
      </ContainerRow>
    </div>
  );
};

export default PokeList;
