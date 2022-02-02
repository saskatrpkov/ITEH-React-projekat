import React, { useEffect, useState } from "react";
import LetKartica from "./LetKartica";
import "./ListaLetova.css";

function ListaLetova({ nadjiLetoveZaIzabranaPolja, polazak, odlazak }) {
  const [pocetak, setPocetak] = useState(polazak.length === 0 ? '' : polazak[0]);
  const [kraj, setKraj] = useState(0);
  const [letoviPoKriterijumu, setLetoviPoKriterijumu] = useState([]);

  useEffect(() => {
    const podaci = nadjiLetoveZaIzabranaPolja(pocetak, kraj);
    setLetoviPoKriterijumu(podaci);
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
        <select value={kraj} onChange={(e) => setKraj(e.target.value)}>
          <option value={0}>Izaberite destinaciju</option>
          {odlazak.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>

        {letoviPoKriterijumu.length > 0 && (
          letoviPoKriterijumu.map(element => {
            return <LetKartica podaci={element} />
          })
        )}
        {letoviPoKriterijumu.length === 0 && <div className="nemaLetova">Za zadati kriterijum nema letova</div>}
      </div>
    </>
  );
}

export default ListaLetova;
