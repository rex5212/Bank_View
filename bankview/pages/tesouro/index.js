import React, { useEffect, useState } from 'react'
import axios from "axios"
import Maintenance from '../../components/Maintenance/Maintenance'
import BaseBar from '../../components/BaseBar'
import { Row } from 'react-bootstrap'
import BasicTable from '../../components/Table/BasicTable'
import BasicDiv from '../../components/BasicDiv'

export const index = () => {

  const [tesouro, setTesouro] = useState([])

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    axios.get('/api/tesouro').then(resultado => {
      setTesouro(resultado.data)
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

  function newTesouro(dados) {
    axios.post('/api/tesouro', dados)
    reset({
      indice: "",
      orgao: "",
      valor: "",
      data: ""
    })
    setMinflacao(!minflacao)
  }

  return (
    <BaseBar>
      <Row>
        <BasicDiv>
          <BasicTable>
            <thead >
              <tr>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Nome
                </th>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Rentabilidade anual (%)	
                </th>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Investimento mínimo (R$)	
                </th>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Preço unitário (R$)	
                </th>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Vencimento
                </th>
              </tr>
            </thead>
            <tbody class="divide-y opacity-100 border-[#000AFF]">
              {}
            </tbody>
          </BasicTable>
        </BasicDiv>
      </Row>
    </BaseBar>
  )
}

export default index;