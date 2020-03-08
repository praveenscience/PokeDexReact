import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Helpers/Header";

const App = () => {
  return (
    <div className="App">
      <Header className="Header" dark={true}>
        CybSafe Pokedex
      </Header>
      <Router>
        <Route
          path="/"
          exact={true}
          render={props => <pre>You're in the home page!</pre>}
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
