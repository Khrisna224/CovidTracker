import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Indonesia() {
  const [confirm, setConfirm] = useState()
  const [death, setDeath] = useState()
  const [recovered, setRecovered] = useState()

  useEffect(() => {
    axios.get("https://indonesia-covid-19.mathdro.id/api")
      .then((res) => {
        setConfirm(res.data.perawatan)
        setDeath(res.data.meninggal)
        setRecovered(res.data.sembuh)
      })
      .catch((err) => console.log(err))
  })

  const formatter = new Intl.NumberFormat('en')
  return (
    <div className='container'>
      <h2>Indonesia Case</h2>
      <div className='row card-columns'>
        <div className="card text-white text-center bg-warning w-25">
          <div className="card-header"><h5 className='card-title'>Confirmed</h5></div>
          <div className="card-body">
            <h3 className="card-text">{formatter.format(confirm)}</h3>
          </div>
        </div>
        <div className="card text-white text-center bg-success w-25">
          <div className="card-header"><h5 className='card-title'>Recovered</h5></div>
          <div className="card-body">
            <h3 className="card-text">{formatter.format(recovered)}</h3>
          </div>
        </div>
        <div className="card text-white text-center bg-danger w-25">
          <div className="card-header"><h5 className='card-title'>Deaths</h5></div>
          <div className="card-body">
            <h3 className="card-text">{formatter.format(death)}</h3>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Indonesia;
