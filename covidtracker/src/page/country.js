import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/card";

const Country = ({ match }) => {
  const [country, setCountry] = useState({
    confirm: NaN,
    death: NaN,
    recovered: NaN,
  });

  useEffect(() => {
    axios
      .get(`https://covid19.mathdro.id/api/countries/${match.params.id}`)
      .then((res) => {
        setCountry({
          confirm: res.data.confirmed.value,
          death: res.data.deaths.value,
          recovered: res.data.recovered.value,
        });
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="container">
      <h2>{match.params.id} Case</h2>
      <Card
        confirm={country.confirm}
        recovered={country.recovered}
        death={country.death}
      />
    </div>
  );
};

export default Country;
