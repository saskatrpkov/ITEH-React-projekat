import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Let from "./Let";
import letovi from "./letovi";
import ListaLetova from "./ListaLetova";

function App() {
  const nadjiLetPoId = (id) => {
    return letovi.find((let1) => let1.id == id);
  };

  const nadjiLetoveZaIzabranaPolja = (from, to) => {
    return letovi.filter((let1) => let1.from == from && (to == 0 || let1.to == to));
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ListaLetova polazak={[...new Set(letovi.map((let1) => let1.from))]} odlazak={[...new Set(letovi.map((let1) => let1.to))]} nadjiLetoveZaIzabranaPolja={nadjiLetoveZaIzabranaPolja} />
        </Route>
        <Route path="/:id">
          <Let nadjiLetPoId={nadjiLetPoId} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
