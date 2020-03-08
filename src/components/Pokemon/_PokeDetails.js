import React from "react";
import ContainerRow from "../Helpers/ContainerRow";

const PokeDetails = ({
  abilities,
  base_experience,
  forms,
  game_indices,
  height,
  held_items,
  id,
  is_default,
  location_area_encounters,
  moves,
  name,
  order,
  species,
  sprites,
  stats,
  types,
  weight
}) => {
  return (
    <div className="Pokemon-Details">
      <ContainerRow fluid={true}>
        <div className="col-12 col-md-6 offset-md-3">
          <h2>{name}</h2>
          <h3>Images</h3>
          <div className="row Pokemon-Details-Images">
            {Object.keys(sprites).map((sprite, key) => (
              <div className="col-4 mb-4 text-center">
                <div className="card" key={key}>
                  <img
                    src={sprites[sprite]}
                    className="card-img-top"
                    alt={sprite}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{sprite.replace(/_/g, " ")}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContainerRow>
    </div>
  );
};

export default PokeDetails;
