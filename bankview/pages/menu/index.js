import React, { useEffect, useState } from 'react'
import BasicDiv from '../../components/BasicDiv'
import axios from "axios"
import { Button, Col, Offcanvas, Row, Table } from 'react-bootstrap'
import BaseBar from '../../components/BaseBar'
import BasicTable from '../../components/Table/BasicTable'
import Maintenance from '../../components/Maintenance/Maintenance'
import BaseBg from '../../components/BaseBg'


const index = () => {

  const [menu, setMenu] = useState([])
  const [modal, setModal] = useState(false)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
                <Maintenance />
              </tbody>
            </BasicTable>
          </BasicDiv>
          <button class='text-white' onClick={() => showModal()}>Modal</button>
          {modal == true ? (
            <>
              <div class="py-12 bg-opacity-5 bg-gray-250 shadow-lg backdrop-blur-md transition duration-500 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" onClick={() => (showModal())}>
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
                    Ação
                  </th>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Preço
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y opacity-100 border-[#000AFF]">
                <Maintenance />
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
                <Maintenance />
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
                <Maintenance />
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
                <Maintenance />
              </tbody>
            </BasicTable>
          </BasicDiv>
        </Col>
      </Row>

      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='end'>


          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>

          
      </Offcanvas> 
    </BaseBar>
  )
}

export default index;