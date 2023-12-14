import { InterfacePokemon } from "../interfaces/pokemonInterface";
import shuffleArray from "./shuffleArray";

const formatPokemonData = (data: any): InterfacePokemon[] => {
  const formatted = data.pokemon_v2_pokemon?.map((pokemon: any) => {
    const image = pokemon.pokemon_v2_pokemonsprites.map((e: any) =>
      JSON.parse(e.sprites).other.dream_world.front_default
        ? JSON.parse(e.sprites).other.dream_world.front_default
        : JSON.parse(e.sprites).front_default
    );

    return {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      experience: pokemon.base_experience,
      abilities: pokemon.pokemon_v2_pokemonabilities.map(
        (ability: any) => ability.pokemon_v2_ability.name
      ),
      image: image[0],
    } as InterfacePokemon;
  });

  return shuffleArray(formatted);
};

export default formatPokemonData;
