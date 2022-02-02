import React from "react";
import { useHistory } from "react-router";
import "./LetKartica.css";

function LetKartica({ podaci }) {
  const history = useHistory();
  return (
    <div onClick={() => history.push(`/${podaci.id}`)} className="letKartica">
      <img
        width={200}
        src="https://thumbs.dreamstime.com/b/jet-plane-icon-jet-plane-icon-blue-white-background-120405606.jpg"
      />
      <div className="informacije">
        <div>{podaci.from}</div>
        <div>{podaci.to}</div>
        <div>{podaci.cena}</div>
        <div>{podaci.trajanje}</div>
        <div>{podaci.polasci}</div>
      </div>
    </div>
  );
}

export default LetKartica;
