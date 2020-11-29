import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/card";
import Input from "../components/input";

const Global = () => {
  const [world, setWorld] = useState({confirm:NaN,death:NaN,recovered:NaN})

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api")
      .then((res) => {
        setWorld({
          confirm:res.data.confirmed.value,
          death:res.data.deaths.value,
          recovered:res.data.recovered.value
        });
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="container">
      <h2>Global Case</h2>
      <Card confirm={world.confirm} recovered={world.recovered} death={world.death} />
      <br />
      <br />
      <Input />
    </div>
  );
};

export default Global;
