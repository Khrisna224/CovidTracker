import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from '../components/table'


const Provinsi =()=> {
  const [prov, setProv] = useState([])

  useEffect(() => {
    axios.get("https://indonesia-covid-19.mathdro.id/api/provinsi")
    .then((res) => {
      setProv(res.data.data)
    })
    .catch((err) => console.log(err))
  })

  return (
    <div className='container'>
      <h1>Provinsi</h1>
      <h3>Jumlah kasus per provinsi</h3>
      <div className='container'>
        <Table prov={prov} />
      </div>
    </div>
  );
}

export default Provinsi;
