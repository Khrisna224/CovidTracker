import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Countries = () => {
  const [allCountry, setAllCountry] = useState([]);

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api/countries")
      .then((res) => {
        setAllCountry(res.data.countries);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="container">
      <h2>Country List</h2>
      <div className="row row-cols-1 row-cols-md-4">
        {allCountry.map((country) => (
          <div className="col mb-4" key={country.name}>
            <div className="card text-dark text-center">
              <div className="card-header">
                <h5 className="card-title">
                  <Link to={`/country/${country.name}`}>{country.name}</Link>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default Countries;
