import React, { useEffect, useState } from "react";
import letovi from "./letovi";
import LetKartica from "./LetKartica";
import "./ListaLetova.css";

function ListaLetova({ nadjiLetZaIzabranaPolja }) {
  const polazak = [...new Set(letovi.map((let1) => let1.from))];
  const odlazak = [...new Set(letovi.map((let1) => let1.to))];

  const [pocetak, setPocetak] = useState("");
  const [kraj, setKraj] = useState("");
  const [letoviPoKriterijumu, setLetoviPoKriterijumu] = useState(null);

  useEffect(() => {
    const podaci = nadjiLetZaIzabranaPolja(letovi, pocetak, kraj);
    setLetoviPoKriterijumu(podaci || null);
  }, [pocetak, kraj]);

  return (
    <>
      <div className="naslov">Spisak letova</div>
      <div className="listaLetova">
        <select value={pocetak} onChange={(e) => setPocetak(e.target.value)}>
          {polazak.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        <select value={kraj || null} onChange={(e) => setKraj(e.target.value)}>
          {odlazak.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>

        {letoviPoKriterijumu && <LetKartica podaci={letoviPoKriterijumu} />}
        {!letoviPoKriterijumu && <div className="nemaLetova">Za zadati kriterijum nema letova</div>}
      </div>
    </>
  );
}

export default ListaLetova;
