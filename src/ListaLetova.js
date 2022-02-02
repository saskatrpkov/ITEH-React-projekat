import React, { useEffect, useState } from "react";
import LetKartica from "./LetKartica";
import "./ListaLetova.css";

function ListaLetova({ nadjiLetZaIzabranaPolja, polazak, odlazak }) {
  const [pocetak, setPocetak] = useState(polazak.length === 0 ? '' : polazak[0]);
  const [kraj, setKraj] = useState(odlazak.length === 0 ? '' : odlazak[0]);
  const [letoviPoKriterijumu, setLetoviPoKriterijumu] = useState(null);

  useEffect(() => {
    const podaci = nadjiLetZaIzabranaPolja(pocetak, kraj);
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
