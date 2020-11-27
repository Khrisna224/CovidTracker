import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Indonesia() {
  const [confirm, setConfirm] = useState()
  const [death, setDeath] = useState()
  const [recovered, setRecovered] = useState()
  const [cases, setCases] = useState()

  useEffect(() => {
    axios.get("https://indonesia-covid-19.mathdro.id/api")
      .then((res) =>{
        setConfirm(res.data.perawatan)
        setDeath(res.data.meninggal)
        setRecovered(res.data.sembuh)
        setCases(res.data.jumlahKasus)
      })
      .catch((err) => console.log(err))
  })

  const formatter = new Intl.NumberFormat('en')
  return (
    <div>
      <h1>Indonesia</h1>
      <h1>Confirm: {formatter.format(confirm)}</h1>
      <h1>Recovered: {formatter.format(recovered)}</h1>
      <h1>Death: {formatter.format(death)}</h1>
      <h1>Jumlah kasus: {formatter.format(cases)}</h1>
    </div>
  );
}

export default Indonesia;
