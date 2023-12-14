import createApolloClient from "../client";
import formatPokemonData from "../../helpers/formatData";
import { gql } from "@apollo/client";

const getPokemons = async () => {
  const client = await createApolloClient(); // Aquí esperamos la creación del cliente Apollo
  const { data } = await client.query({
    query: gql`
      {
        pokemon_v2_pokemon {
          id
          name
          base_experience
          height
          weight
          pokemon_v2_pokemonabilities {
            pokemon_v2_ability {
              name
            }
          }
          pokemon_v2_pokemonsprites {
            sprites
          }
        }
      }
    `,
  });
  return formatPokemonData(data);
};

export default getPokemons;
