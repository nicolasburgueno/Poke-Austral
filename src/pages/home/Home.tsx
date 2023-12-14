import "./home.css";

import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonSpinner,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
} from "@ionic/react";
import React, { useEffect, useState } from "react";

import Cards from "../../components/cards/Cards";
import { InterfacePokemon } from "../../interfaces/pokemonInterface";
import getPokemons from "../../graphql/queries/getPokemons";

const NewHome: React.FC = () => {
  const [allPokemons, setAllPokemons] = useState<InterfacePokemon[]>([]);
  const [renderPokemons, setRenderPokemons] = useState<InterfacePokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      getPokemons().then((pokemons) => {
        setAllPokemons(pokemons);
        setRenderPokemons(pokemons.slice(0, 13));
        setCurrentPage(2);
      });
      event.detail.complete();
    }, 2000);
  }

  const addPokemons = () => {
    if (allPokemons.length > renderPokemons.length) {
      const pokemonPerPage = 13;
      let indexOfLastPokemon = currentPage * pokemonPerPage;
      let indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
      if (indexOfFirstPokemon + 13 > allPokemons.length) {
        indexOfLastPokemon = allPokemons.length;
      }
      const pokemonsToAdd: InterfacePokemon[] = allPokemons.slice(
        indexOfFirstPokemon,
        indexOfLastPokemon
      );
      setCurrentPage(currentPage + 1);
      setRenderPokemons((prevItems) => [...prevItems, ...pokemonsToAdd]);
    }
  };

  useEffect(() => {
    getPokemons().then((pokemons) => {
      setAllPokemons(pokemons);
      setRenderPokemons(pokemons.slice(0, 13));
      setCurrentPage(currentPage + 1);
    });
  }, []);

  return (
    <>
      {!allPokemons.length ? (
        <>
          <IonPage>
            <IonSpinner color="dark"></IonSpinner>
          </IonPage>
        </>
      ) : (
        <>
          <IonPage>
            <IonHeader className="custom-header">
              <IonToolbar className="custom-header">
                <IonTitle className="ion-text-center">Poke - Austral</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                <IonRefresherContent></IonRefresherContent>
              </IonRefresher>
              <IonGrid fixed={true}>
                <IonCol className="ion-col-home">
                  <IonRow>
                    <Cards pokemons={renderPokemons} />
                  </IonRow>
                </IonCol>
              </IonGrid>
              <IonInfiniteScroll
                onIonInfinite={(ev) => {
                  addPokemons();
                  setTimeout(() => ev.target.complete(), 1000);
                }}
              >
                <IonInfiniteScrollContent loadingText="Loading more data..."></IonInfiniteScrollContent>
              </IonInfiniteScroll>
            </IonContent>
          </IonPage>
        </>
      )}
    </>
  );
};

export default NewHome;
