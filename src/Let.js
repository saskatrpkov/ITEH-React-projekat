import React, { useState } from "react";
import { useRouteMatch } from "react-router";
import "./Let.css";
import letovi from "./letovi";

function Let({ nadjiLetPoId }) {
  const match = useRouteMatch();

  const [zakazivanje, setZakazivanje] = useState("");

  const podaci = nadjiLetPoId(letovi, match.params?.id);

  return (
    <>
      <div className="naslovLeta">Podaci o letu: {match.params?.id}</div>
      <div className="letPage">
        <img
          width={400}
          src="https://thumbs.dreamstime.com/b/jet-plane-icon-jet-plane-icon-blue-white-background-120405606.jpg"
        />
        <div className="informacijeOLetu">
          <div>Poletanje: {podaci.from}</div>
          <div>Destinacija: {podaci.to}</div>
          <div>Cena karte: {podaci.cena}e </div>
          <div>Trajanje leta: {podaci.trajanje}</div>
          <div>Polasci u toku nedelje: {podaci.polasci}</div>
        </div>
      </div>
      <div className="zakazivanje">
        <input
          placeholder="Unesite tekst za rezervaciju"
          value={zakazivanje}
          onChange={(e) => setZakazivanje(e.target.value)}
        />
        <button
          disabled={!zakazivanje}
          onClick={() => {
            alert(`Uspesno ste rezervisali karte, vasa poruka je ${zakazivanje}`);
          }}>
          Rezervisi
        </button>
      </div>
    </>
  );
}

export default Let;
