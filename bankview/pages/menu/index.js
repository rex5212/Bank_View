import React, { useEffect, useState } from 'react'
import axios from "axios"

export const index = () => {

  const [menu, setMenu] = useState([])

  useEffect(() => {
    getAll()
  }, [])

  function getAll(){
    axios.get('/api/menu').then(resultado=>{
      setMenu(resultado.data)
    })
  }

  return (
    <div>index</div>
  )
}
