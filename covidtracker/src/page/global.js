import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from "../components/card"

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

  return (
    <div className="container">
      <h2>Global Case</h2>
      <Card 
      confirm={confirm}
      recovered={recovered}
      death={death} />
      {/* <br />
      <br />
      <div>
        <form>
          <input />
          <button>Find</button>
        </form>
        
      </div> */}
    </div>
  );
}

export default Global;
