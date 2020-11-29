import { useState } from "react";
import axios from 'axios'
import {countrySelected} from '../utils/countrySelect'

const Input = () => {
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
      })
      .catch((err) => {
        alert(`Country ${name} not found in JHU database`);
        setCountry({
          name: name,
          set: false,
        });
      });
  };

  return (
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
  );
};

export default Input;
