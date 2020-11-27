import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Provinsi() {
  const [prov, setProv] = useState([])

  useEffect(() => {
    axios.get("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then((res) =>{
        setProv(res.data)
      })
      .catch((err) => console.log(err))
  })

  return (
    <div>
      <h1>Provinsi</h1>
      <h3>Jumlah kasus per provinsi</h3>
      {
        prov.map(provinsi =>{
        <h2>{provinsi.provinsi}</h2>
        })
      }
    </div>
  );
}

export default Provinsi;
