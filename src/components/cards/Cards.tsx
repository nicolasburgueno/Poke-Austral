import Card from "../card/Card";
import { InterfacePokemon } from "./../../interfaces/pokemonInterface";
import React from "react";

const Cards: React.FC<{ pokemons: InterfacePokemon[] }> = ({ pokemons }) => {
  return (
    <>
      {pokemons.map((pokemon) => (
        <React.Fragment key={pokemon.id}>
          <Card pokemon={pokemon} />
        </React.Fragment>
      ))}
    </>
  );
};

export default Cards;
