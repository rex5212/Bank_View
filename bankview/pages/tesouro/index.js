import React, { useEffect, useState } from 'react'
import axios from "axios"

export const index = () => {

  const [tesouro, setTesouro] = useState([])

  useEffect(() => {
    getAll()
  }, [])

  function getAll(){
    axios.get('/api/tesouro').then(resultado=>{
      setTesouro(resultado.data)
    })
  }

  return (
    <div>index</div>
  )
}

export default index;