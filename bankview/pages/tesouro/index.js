import React, { useEffect, useState } from 'react'
import axios from "axios"
import Maintenance from '../../components/Maintenance/Maintenance'
import BaseBar from '../../components/BaseBar'

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
    <BaseBar>
      <Maintenance/>
    </BaseBar>
  )
}

export default index;