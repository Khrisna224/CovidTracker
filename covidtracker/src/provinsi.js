import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Provinsi() {
  const [prov, setProv] = useState([])

  useEffect(() => {
    axios.get("https://indonesia-covid-19.mathdro.id/api/provinsi")
    .then((res) => {
      setProv(res.data.data)
    })
    .catch((err) => console.log(err))
  })

  console.log(prov)
  const Value = () => {
    if (prov.length !== 0) {
      return (
        prov.map(provinsi =>
          <tr>
            <td>{provinsi.provinsi}</td>
            <td>{provinsi.kasusPosi}</td>
            <td>{provinsi.kasusSemb}</td>
            <td>{provinsi.kasusMeni}</td>
          </tr>
        )
      )
    } else {
      return (
        <tr>
          <td>load</td>
          <td>load</td>
          <td>load</td>
          <td>load</td>
        </tr>
      )

    }
  }

  return (
    <div className='container'>
      <h1>Provinsi</h1>
      <h3>Jumlah kasus per provinsi</h3>
      <div className='container'>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Provinsi</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Recovered</th>
              <th scope="col">Death</th>
            </tr>
          </thead>
          <tbody>
            {Value()}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Provinsi;
