import React, { useEffect, useState } from 'react'
import BasicDiv from '../../components/BasicDiv'
import axios from "axios"
import { Button, Col, Offcanvas, Row, Table } from 'react-bootstrap'
import BaseBar from '../../components/BaseBar'
import BasicTable from '../../components/Table/BasicTable'
import Maintenance from '../../components/Maintenance/Maintenance'
import BaseBg from '../../components/BaseBg'
import Modify from '../../components/OptionsBtn/Modify'
import Exclude from '../../components/OptionsBtn/exclude'


const index = () => {

  const [moeda, setMoeda] = useState([])
  const [juros, setJuros] = useState([])
  const [noticia, setNoticia] = useState([])
  const [inflacao, setInflacao] = useState([])

  const [modal, setModal] = useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    axios.get('/api/juros').then(resultado => {
      setJuros(resultado.data)
    })
    axios.get('/api/inflacao').then(resultado => {
      setInflacao(resultado.data)
    })
    axios.get('/api/noticia').then(resultado => {
      setNoticia(resultado.data)
    })
    axios.get('/api/moeda').then(resultado => {
      setMoeda(resultado.data)
    })
  }

  function showModal() {
    setModal(!modal)
  }

  function teste() {
    alert('oi')
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
                    Data
                  </th>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Noticia
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y opacity-100 border-[#000AFF]">
                {}
              </tbody>
            </BasicTable>
          </BasicDiv>
          <button class='text-white' onClick={() => showModal()}>Modal</button>
          {modal == true ? (
            <>
              <div class="py-12 bg-opacity-5 bg-gray-250 shadow-lg backdrop-blur-md transition duration-500 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0">
                <div role="alert" class=" bg-opacity-50 px-24 py-10 shadow-lg backdrop-blur-md max-sm:px-8 flex items-center justify-center">
                  <div class="relative text-white py-8 px-5 md:px-10 bg-black rounded-xl border-t-2 border-b-2 border-[#000AFF]">
                    <p>Teste de Modal</p>
                  </div>
                </div>
              </div>
            </>) : ''}
        </Col>
        <Col>
          <BasicDiv>
            <BasicTable>
              <thead>
                <tr>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Índice da Inflação
                  </th>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Órgão
                  </th>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Valor
                  </th>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Data de ref.
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y opacity-100 border-[#000AFF]">
                {}
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
                {}
              </tbody>
            </BasicTable>
          </BasicDiv>
          <BasicDiv>
            <BasicTable>
              <thead>
                <tr>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Índice do Juro
                  </th>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Órgão
                  </th>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Valor
                  </th>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Data de ref.
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y opacity-100 border-[#000AFF]">
                {}
              </tbody>
            </BasicTable>
          </BasicDiv>
        </Col>
      </Row>

    </BaseBar>
  )
}

export default index;