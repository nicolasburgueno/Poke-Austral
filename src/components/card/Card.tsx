import "./card.css";

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
} from "@ionic/react";

import { InterfacePokemon } from "./../../interfaces/pokemonInterface";
import React from "react";

const Card: React.FC<{ pokemon: InterfacePokemon }> = ({ pokemon }) => {
  return (
    <IonCol size="6" sizeMd="4" sizeLg="3" sizeXl="2">
      <IonCard>
        <img className="poke-img" alt={pokemon.name} src={pokemon.image} />
        <IonCardHeader>
          <IonCardTitle className="custom-card-title">
            {pokemon.name}
          </IonCardTitle>
          <IonCardSubtitle>
            Abilities: {pokemon.abilities.join(", ")}
          </IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Experince: {pokemon.experience}</p>
        </IonCardContent>
      </IonCard>
    </IonCol>
  );
};

export default Card;
