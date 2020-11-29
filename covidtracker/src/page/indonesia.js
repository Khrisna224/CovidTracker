import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from "../components/card"

const Indonesia =()=> {
  const [indo, setIndo] = useState({confirm:NaN,death:NaN,recovered:NaN})

  useEffect(() => {
    axios.get("https://indonesia-covid-19.mathdro.id/api")
      .then((res) => {
        setIndo(
          {
            confirm: res.data.jumlahKasus,
            death: res.data.meninggal,
            recovered: res.data.sembuh
          })
      })
      .catch((err) => console.log(err))
  })

  
  return (
    <div className='container'>
      <h2>Indonesia Case</h2>
      <Card 
      confirm={indo.confirm}
      recovered={indo.recovered}
      death={indo.death} />
    </div>
  );
}

export default Indonesia;
