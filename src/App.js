import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListaLetova from "./ListaLetova";
import Let from "./Let";

function App() {
  const nadjiLetPoId = (letovi, id) => {
    return letovi.find((let1) => let1.id == id);
  };

  const nadjiLetZaIzabranaPolja = (letovi, from, to) => {
    return letovi.find((let1) => let1.from == from && let1.to == to);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ListaLetova nadjiLetZaIzabranaPolja={nadjiLetZaIzabranaPolja} />
        </Route>
        <Route path="/:id">
          <Let nadjiLetPoId={nadjiLetPoId} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
