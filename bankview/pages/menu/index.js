import React, { useEffect, useState } from 'react'
import BasicDiv from '../../components/BasicDiv'
import axios from "axios"
import { Col, Row, Table } from 'react-bootstrap'
import BaseBar from '../../components/BaseBar'
import BasicTable from '../../components/Table/BasicTable'
import Maintenance from '../../components/Maintenance/Maintenance'

const index = () => {

  const [menu, setMenu] = useState([])

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    axios.get('/api/menu').then(resultado => {
      setMenu(resultado.data)
    })
    axios.get('/api/menu').then(resultado => {
      setMenu(resultado.data)
    })
    axios.get('/api/menu').then(resultado => {
      setMenu(resultado.data)
    })
  }

  function showModal() {
    setModal(!modal)
  }

  return (
    <BaseBar>
      <Row md={3}>
        <Col>
          <p className='text-white text-center px-4 pt-4'>Esse eo Site Bank View, um site de visualização de Ações e Tesouros no mercado Financeiro</p>
          <BasicDiv>
            <BasicTable>
              <thead >
                <tr>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Noticia
                  </th>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Data
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y opacity-100 border-[#000AFF]">
                <Maintenance/>
              </tbody>
            </BasicTable>
          </BasicDiv>
        </Col>
        <Col>
          <BasicDiv>
            <BasicTable>
              <thead>
                <tr>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Ação
                  </th>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Preço
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
                    Dividendo/Juros
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y opacity-100 border-[#000AFF]">
                <Maintenance/>
              </tbody>
            </BasicTable>
          </BasicDiv>
        </Col>
        <Col>
          <BasicDiv>
            <BasicTable>
              <thead >
                <tr>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Moeda
                  </th>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Valor
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y opacity-100 border-[#000AFF]" className='scrollbar scrollbar-primary'>
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
        </Col>
      </Row>
    </BaseBar>
  )
}

export default index;