import React, { useEffect, useState } from 'react'
import axios from "axios"

export const index = () => {

  const [bolsa, setBolsa] = useState([])

  useEffect(() => {
    getAll()
  }, [])

  function getAll(){
    axios.get('/api/bolsa').then(resultado=>{
      setBolsa(resultado.data)
    })
  }

  return (
    <div>index</div>
  )
}
