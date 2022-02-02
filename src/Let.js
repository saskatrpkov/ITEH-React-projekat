import React, { useState } from "react";
import { useRouteMatch } from "react-router";
import "./Let.css";
import Podatak from "./Podatak";

function Let({ nadjiLetPoId }) {
  const match = useRouteMatch();

  const [zakazivanje, setZakazivanje] = useState("");
  const podaci = nadjiLetPoId(match.params?.id);

  return (
    <>
      <div className="naslovLeta">Podaci o letu: {match.params?.id}</div>
      <div className="letPage">
        <img
          width={400}
          src="https://thumbs.dreamstime.com/b/jet-plane-icon-jet-plane-icon-blue-white-background-120405606.jpg"
        />
        <div className="informacijeOLetu">
          <Podatak naziv='Poletanje' vrednost={podaci.from} />
          <Podatak naziv='Destinacija' vrednost={podaci.to} />
          <Podatak naziv='Cena karte' vrednost={podaci.cena} />
          <Podatak naziv='Trajanje leta' vrednost={podaci.trajanje} />
          <Podatak naziv='Polasci u toku nedelje' vrednost={podaci.polasci} />
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
