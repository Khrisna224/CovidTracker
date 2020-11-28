import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from "../components/card"

const Indonesia =()=> {
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

  
  return (
    <div className='container'>
      <h2>Indonesia Case</h2>
      <Card 
      confirm={confirm}
      recovered={recovered}
      death={death} />
    </div>
  );
}

export default Indonesia;
