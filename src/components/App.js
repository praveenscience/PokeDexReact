import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Helpers/Header";
import PokeList from "./PokeList/PokeList";
import { GetInitialPokemons } from "../services/PokeAPI";
import Pokemon from "./Pokemon/Pokemon";

const App = () => {
  const [List, setList] = useState([]);
  const [Prev, setPrev] = useState(null);
  const [Next, setNext] = useState(null);
  const [Pokemons, setPokemons] = useState([]);
  useEffect(() => {
    GetInitialPokemons().then(res => {
      const PokeId = p =>
        +p.url
          .replace("https://pokeapi.co/api/v2/pokemon/", "")
          .replace("/", "");
      setList(
        res.data.results.map(p => ({
          Name: p.name,
          Image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            PokeId(p) +
            ".png",
          Link: "/" + PokeId(p)
        }))
      );
      if (res.data.previous) {
        setPrev(
          +res.data.previous
            .replace("https://pokeapi.co/api/v2/pokemon/?offset=", "")
            .replace("&limit=100", "")
        );
      }
      if (res.data.next) {
        setNext(
          +res.data.next
            .replace("https://pokeapi.co/api/v2/pokemon/?offset=", "")
            .replace("&limit=100", "")
        );
      }
    });
    return () => {
      // Somehow cancel the AJAX call!
    };
  }, []);
  return (
    <div className="App">
      <Router>
        <Header className="Header" dark={true}>
          <Link to="/" title="Go to home page">
            CybSafe Pokedex
          </Link>
        </Header>
        <Route
          path="/"
          exact={true}
          render={() => <PokeList List={List} Pokemons={Pokemons} />}
        />
        <Route
          path="/:pokemon"
          render={props => <Pokemon {...{ ...props, Pokemons, setPokemons }} />}
        />
      </Router>
    </div>
  );
};

export default App;
