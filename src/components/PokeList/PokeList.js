import React from "react";
import ContainerRow from "../Helpers/ContainerRow";
import PokeListItem from "./_PokeListItem";

const PokeList = ({ List }) => {
  return (
    <div className="PokeList">
      <ContainerRow fluid={true}>
        <div className="col-6 offset-3">
          <h2 className="mb-3">PokemonList</h2>
          <div className="list-group">
            {List &&
              List.map((list, key) => <PokeListItem key={key} {...list} />)}
          </div>
        </div>
      </ContainerRow>
    </div>
  );
};

export default PokeList;
