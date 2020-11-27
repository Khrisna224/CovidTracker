import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Global = () => {
  const [world, setWorld] = useState([])

  useEffect(() => {
    axios.get("https://covid19.mathdro.id/api")
      .then((res) =>{
        setWorld(res.data)
        console.log(world)
      })
      .catch((err) => console.log(err))
  })

  console.log(world)
  const formatter = new Intl.NumberFormat('en')
  return (
    <div className="container">
      <h1>Global</h1>
      <h1>Confirm: {formatter.format(world.confirmed.value)}</h1>
      <h1>Recovered: {formatter.format(world.deaths.value)}</h1>
      <h1>Death: {formatter.format(world.recovered.value)}</h1>
    </div>
  );
}

export default Global;
