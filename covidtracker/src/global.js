import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Global = () => {
  const [confirm, setConfirm] = useState()
  const [death, setDeath] = useState()
  const [recovered, setRecovered] = useState()

  useEffect(() => {
    axios.get("https://covid19.mathdro.id/api")
      .then((res) => {
        setConfirm(res.data.confirmed.value)
        setDeath(res.data.deaths.value)
        setRecovered(res.data.recovered.value)
      })
      .catch((err) => console.log(err))
  })

  const formatter = new Intl.NumberFormat('en')
  return (
    <div className="container">
      <h1>Global</h1>
      <h1>Confirm: </h1>
      <h1>Recovered: {formatter.format(recovered)}</h1>
      <h1>Death: {formatter.format(death)}</h1>
      <div className="card text-white text-center bg-warning w-25">
        <div className="card-header"><h5 className='card-title'>Confirmed</h5></div>
        <div className="card-body">
          <h3 className="card-text">{formatter.format(confirm)}</h3>
        </div>
      </div>
    </div>
  );
}

export default Global;
