import React, { useState, useEffect } from "react";
import Radnik from "./Radnik";
import { dajRadnike } from "./services/Services.js";

const RadniciContainer = () => {
  const [radnici, setRadnici] = useState([]);
  const [poStrani, setPoStrani] = useState(20);
  const [stranica, setStranica] = useState(0);

  const brStranica = () => (radnici.length - 1) / poStrani;
  const stranice = brStranica => {
    let stranice = [];
    for (let i = 0; i < brStranica; i++) {
      stranice.push(i);
    }
    return stranice;
  };

  useEffect(() => {
    dajRadnike().then(data => setRadnici(data));
  }, []);

  return (
    <>
      <h1 className="Header"> Svi Radnici</h1>
      <select onChange={e => setPoStrani(e.target.value)}>
        <option value="5"> 1</option>
        <option value="10"> 2</option>
        <option value="15"> 3</option>
      </select>
      <div>
        {radnici
          .slice(stranica * poStrani, (stranica + 1) * poStrani)
          .map(worker => (
            <Radnik worker={worker} key={worker} />
          ))}
      </div>
      <div>
        {stranice(brStranica()).map(stranica => (
          <button onClick={() => setStranica(stranica)}>{stranica + 1}</button>
        ))}
      </div>
    </>
  );
};

export default RadniciContainer;