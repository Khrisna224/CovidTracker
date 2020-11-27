import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Indonesia() {
  const [indo, setIndo] = useState([])

  useEffect(() => {
    axios.get("https://indonesia-covid-19.mathdro.id/api")
      .then((res) =>{
        setIndo(res.data)
        console.log(indo)
      })
      .catch((err) => console.log(err))
  })

  const formatter = new Intl.NumberFormat('en')
  return (
    <div>
      <h1>Indonesia</h1>
      <h1>Confirm: {formatter.format(indo.perawatan)}</h1>
      <h1>Recovered: {formatter.format(indo.sembuh)}</h1>
      <h1>Death: {formatter.format(indo.meninggal)}</h1>
      <h1>Jumlah kasus: {formatter.format(indo.jumlahKasus)}</h1>
    </div>
  );
}

export default Indonesia;
