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

  function excluir(id){
    if(confirm('Deseja realmente excluir o registro?')){
      axios.delete('/api/disciplinas/' + id)
      getAll()
    }
  }

  function novo(dados) {
    axios.post('/api/disciplinas', dados)
    push('/disciplinas')
  }

  return (
    <BaseBar>
      <BasicDiv>
        <BasicTable>
          <thead>
            <tr>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                Data
              </th>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                Estrangeiro
              </th>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                Institucional
              </th>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                Pessoa física
              </th>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                Inst. Financeira
              </th>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                Outros
              </th>
            </tr>
          </thead>
          <tbody class="divide-y opacity-100 border-[#000AFF]">
            {}
          </tbody>
        </BasicTable>
      </BasicDiv>
      <BasicDiv>
        <BasicTable>
          <thead>
            <tr>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                Código
              </th>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                Nome
              </th>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                Volume
              </th>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                Última (R$)
              </th>
              <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                Variação
              </th>
            </tr>
          </thead>
          <tbody class="divide-y opacity-100 border-[#000AFF]">
            {}
          </tbody>
        </BasicTable>
      </BasicDiv>
    </BaseBar>

  )
}

export default index;