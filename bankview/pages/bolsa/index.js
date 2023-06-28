import React, { useEffect, useState } from 'react'
import axios from "axios"
import BasicDiv from '../../components/BasicDiv'
import BaseBar from '../../components/BaseBar'
import { Row } from 'react-bootstrap'
import BasicTable from '../../components/Table/BasicTable'
import Maintenance from '../../components/Maintenance/Maintenance'

export const index = () => {

  const [bolsa, setBolsa] = useState([])

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    axios.get('/api/bolsa').then(resultado => {
      setBolsa(resultado.data)
    })
  }

  return (
    <BaseBar>
      <BasicDiv>
        <BasicTable>
          <thead>
            <tr>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                Ação
              </th>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                Variação
              </th>
            </tr>
          </thead>
          <tbody class="divide-y opacity-100 border-[#000AFF]">
            <Maintenance/>
          </tbody>
        </BasicTable>
      </BasicDiv>
      <BasicDiv>
        <BasicTable>
          <thead>
            <tr>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                Ação
              </th>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                Variação
              </th>
            </tr>
          </thead>
          <tbody class="divide-y opacity-100 border-[#000AFF]">
            <Maintenance/>
          </tbody>
        </BasicTable>
      </BasicDiv>
    </BaseBar>

  )
}

export default index;