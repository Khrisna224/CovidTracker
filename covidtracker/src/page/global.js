import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/card";

const Global = () => {
  const [confirm, setConfirm] = useState();
  const [death, setDeath] = useState();
  const [recovered, setRecovered] = useState();
  const [country, setCountry] = useState({ name: "none", set: false });

  const countryName = (e) => {
    setCountry({
      name: e.target.value,
      country: country.country,
      set: country.set,
      confirm: country.confirm,
      deaths: country.deaths,
      recovered: country.recovered,
    });
  };
  const findCountry = (e) => {
    e.preventDefault();

    let name = country.name;
    axios
      .get(`https://covid19.mathdro.id/api/countries/${name}`)
      .then((res) => {
        setCountry({
          name: name,
          country: name.toUpperCase(),
          confirm: res.data.confirmed.value,
          deaths: res.data.deaths.value,
          recovered: res.data.recovered.value,
          set: true,
        });
        console.log(country);
      })
      .catch((err) => {
        alert(`Country ${name} not found in JHU database`);
        setCountry({
          name: name,
          set: false,
        });
        console.log(country);
      });
  };

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api")
      .then((res) => {
        setConfirm(res.data.confirmed.value);
        setDeath(res.data.deaths.value);
        setRecovered(res.data.recovered.value);
      })
      .catch((err) => console.log(err));
  });

  const countrySelected = (country) => {
    console.log(country);
    if (country.set === false) {
      return;
    } else {
      return (
        <div>
          <h2>{country.country}</h2>
          <Card
            confirm={country.confirm}
            recovered={country.recovered}
            death={country.deaths}
          />
        </div>
      );
    }
  };

  return (
    <div className="container">
      <h2>Global Case</h2>
      <Card confirm={confirm} recovered={recovered} death={death} />
      <br />
      <br />
      <div>
        <h2>Find Country</h2>
        <form className="form-inline" onSubmit={findCountry}>
          <div className="form-group mb-2">
            <h5 className="font-weight-normal">Country Name</h5>
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
              onChange={countryName}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Find Country
          </button>
        </form>
        {countrySelected(country)}
      </div>
    </div>
  );
};

export default Global;
