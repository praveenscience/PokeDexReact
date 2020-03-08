import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Helpers/Header";
import PokeList from "./PokeList/PokeList";
import { GetInitialPokemons } from "../services/PokeAPI";

const App = () => {
  const [List, setList] = useState([]);
  const [Prev, setPrev] = useState(null);
  const [Next, setNext] = useState(null);
  const [Pokemons, setPokemons] = useState({});
  useEffect(() => {
    GetInitialPokemons().then(res => {
      setList(
        res.data.results.map(p => ({
          Name: p.name,
          Image:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            +p.url
              .replace("https://pokeapi.co/api/v2/pokemon/", "")
              .replace("/", "") +
            ".png"
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
          render={props => <PokeList List={List} />}
        />
        <Route
          path="/:pokemon"
          render={props => (
            <pre>
              You're in {props.match.url} and currently looking for the pokemon
              "{props.match.params.pokemon}".
            </pre>
          )}
        />
      </Router>
    </div>
  );
};

export default App;
