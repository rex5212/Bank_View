import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import BasicDiv from '../../components/BasicDiv'
import axios from "axios"
import { Button, Col, Form, Offcanvas, Row, Table } from 'react-bootstrap'
import BaseBar from '../../components/BaseBar'
import BasicTable from '../../components/Table/BasicTable'
import Maintenance from '../../components/Maintenance/Maintenance'
import BaseBg from '../../components/BaseBg'
import Modify from '../../components/OptionsBtn/Modify'
import Exclude from '../../components/OptionsBtn/exclude'
import NewData from '../../components/OptionsBtn/NewData'


const index = () => {

  const [moeda, setMoeda] = useState([])
  const [juros, setJuros] = useState([])
  const [noticia, setNoticia] = useState([])
  const [inflacao, setInflacao] = useState([])

  const [mmoeda, setMmoeda] = useState(false)
  const [mjuros, setMjuros] = useState(false)
  const [mnoticia, setMnoticia] = useState(false)
  const [minflacao, setMinflacao] = useState(false)

  const [modal, setModal] = useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, reset } = useForm()

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
        axios.put(`api/noticia/${dados.id}`)
      getAll()
    }
  }

  function modify(dados){
    // axios.put(`api/noticia/${dados.id}`)
    console.log(dados)
  }

  function newNoticia(dados) {
    axios.post('/api/noticia', dados)
    reset({
      data: "",
      noticia: ""
    })
    setMnoticia(!mnoticia)
  }

  function newMoeda(dados) {
    axios.post('/api/moeda', dados)
    reset({
      moeda: "",
      valor: ""
    })
    setMmoeda(!mmoeda)
  }

  function newJuros(dados) {
    axios.post('/api/juros', dados)
    reset({
      indice: "",
      orgao: "",
      valor: "",
      data: ""
    })
    setMjuros(!mjuros)
  }

  function newInflacao(dados) {
    axios.post('/api/inflacao', dados)
    reset({
      indice: "",
      orgao: "",
      valor: "",
      data: ""
    })
    setMinflacao(!minflacao)
  }

  useEffect(() => {
    getAll()
  }, [])

  // useEffect(() => {
  //   axios.get('/api/juros').then(resultado => {
  //     setJuros(resultado.data)
  //   })
  // }, [])

  // useEffect(() => {
  //   axios.get('/api/inflacao').then(resultado => {
  //     setInflacao(resultado.data)
  //   })
  // }, [])

  // useEffect(() => {
  //   axios.get('/api/noticia').then(resultado => {
  //     setNoticia(resultado.data)
  //   })
  // }, [])

  // useEffect(() => {
  //   axios.get('/api/moeda').then(resultado => {
  //     setMoeda(resultado.data)
  //   })
  // }, [])

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

  function Modal(type) {
    if (type == 'noticia') {
      setMnoticia(!mnoticia)
    } else if (type == 'inflacao') {
      setMinflacao(!minflacao)
    } else if (type == 'juros') {
      setMjuros(!mjuros)
    } else if (type == 'moedas') {
      setMmoeda(!mmoeda)
    }
  }

  function teste() {
    alert('oi')
  }

  return (
    <BaseBar>
      <Row>
        <p className='text-white text-center px-4 pt-4'>Esse eo Site Bank View, um site de visualização de Ações e Tesouros no mercado Financeiro</p>
      </Row>
      <Row>
        <Col>

          <BasicDiv>
            <BasicTable>
              <thead >
                <tr>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Noticia
                  </th>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Data
                  </th>
                  <th onClick={() => Modal('noticia')} scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    <NewData />
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y opacity-100 border-[#000AFF]">
                {noticia.map(item => (
                  <tr class=' hover:bg-[#000AFF]'>
                    <td scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                      {item.noticia}
                    </td>
                    <td scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                      {item.data}
                    </td>
                    <th onClick={() => handleSubmit(modify)} scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                      <Modify />
                    </th>
                    <td scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                      <Exclude />
                    </td>
                  </tr>
                ))}
              </tbody>
            </BasicTable>
          </BasicDiv>
        </Col>
        <Col>

          <BasicDiv>
            <BasicTable>
              <thead>
                <tr>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Moeda
                  </th>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Valor
                  </th>
                  <th onClick={() => Modal('moedas')} scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    <NewData />
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y opacity-100 border-[#000AFF]" className='scrollbar scrollbar-primary'>
                {moeda.map(item => (
                  <tr class=' hover:bg-[#000AFF]'>
                    <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                      {item.moeda}
                    </th>
                    <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                      {item.valor}
                    </th>
                    <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                      <Modify />
                    </th>
                    <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                      <Exclude />
                    </th>
                  </tr>
                ))}
              </tbody>
            </BasicTable>
          </BasicDiv>
        </Col>
      </Row>
      <Row>

        <BasicDiv>
          <BasicTable>
            <thead>
              <tr>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Índice da Inflação
                </th>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Órgão
                </th>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Valor
                </th>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Data de ref.
                </th>
                <th onClick={() => Modal('inflacao')} scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  <NewData />
                </th>
              </tr>
            </thead>
            <tbody class="divide-y opacity-100 border-[#000AFF]">
              {inflacao.map(item => (
                <tr class=' hover:bg-[#000AFF]'>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    {item.indice}
                  </th>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    {item.orgao}
                  </th>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    {item.valor}
                  </th>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    {item.data}
                  </th>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    <Modify />
                  </th>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    <Exclude />
                  </th>
                </tr>
              ))}
            </tbody>
          </BasicTable>
        </BasicDiv>
      </Row>
      <Row>

        <BasicDiv>
          <BasicTable>
            <thead>
              <tr>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Índice do Juro
                </th>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Órgão
                </th>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Valor
                </th>
                <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Data de ref.
                </th>
                <th onClick={() => Modal('juros')} scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  <NewData />
                </th>
              </tr>
            </thead>
            <tbody class="divide-y opacity-100 border-[#000AFF]">
              {juros.map(item => (
                <tr class=' hover:bg-[#000AFF]'>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    {item.indice}
                  </th>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    {item.orgao}
                  </th>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    {item.valor}
                  </th>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    {item.data}
                  </th>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    <Modify />
                  </th>
                  <th scope="col" class="py-3 px-2 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    <Exclude />
                  </th>
                </tr>
              ))}
            </tbody>
          </BasicTable>
        </BasicDiv>
      </Row>

      {mnoticia == true ? (
        <div class="py-12 bg-opacity-5 bg-gray-250 shadow-lg backdrop-blur-md transition duration-500 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0">
          <div role="alert" class=" bg-opacity-50 px-24 py-10 shadow-lg backdrop-blur-md max-sm:px-8 flex items-center justify-center">
            <div class="relative text-white py-8 px-5 md:px-10 bg-black rounded-xl border-t-2 border-b-2 border-[#000AFF]">
              <Row>
                <div class='flex justify-between'>
                  <p>Criar Nova Noticia</p>
                  <div onClick={() => Modal('noticia')} className='fixed-top-end'>
                    <Exclude />
                  </div>
                </div>
              </Row>
              <Row>
                <Form className='py-2'>
                  <Form.Group className="mb-3 py-2" controlId="noticia">
                    <Form.Label className='text-white'>Titulo da Noticia</Form.Label>
                    <Form.Control className='bg-transparent border-bank border-0 placerholder-color-white' type="text" mask='' placeholder="noticia" {...register('noticia')} />
                  </Form.Group>
                  <Form.Group className="mb-3 py-2" controlId="data">
                    <Form.Label className='text-white'>Data da Noticia</Form.Label>
                    <Form.Control className='bg-transparent border-bank border-0 text-white' type="date" mask='' {...register('data')} />
                  </Form.Group>
                  <Row className='d-flex align-item-center py-2'>
                    <Button variant="primary" className='border-primary' type="submit" onClick={handleSubmit(newNoticia)}>
                      Publica Noticia
                    </Button>
                  </Row>
                </Form>
              </Row>
            </div>
          </div>
        </div>
      ) : ''}
      {mjuros == true ? (
        <div class="py-12 bg-opacity-5 bg-gray-250 shadow-lg backdrop-blur-md transition duration-500 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0">
          <div role="alert" class=" bg-opacity-50 px-24 py-10 shadow-lg backdrop-blur-md max-sm:px-8 flex items-center justify-center">
            <div class="relative text-white py-8 px-5 md:px-10 bg-black rounded-xl border-t-2 border-b-2 border-[#000AFF]">
              <Row>
                <div class='flex justify-between'>
                  <p>Criar Novo Juro</p>
                  <div onClick={() => Modal('juros')} className='fixed-top-end'>
                    <Exclude />
                  </div>
                </div>
              </Row>
              <Row>
                <Form className='py-2'>
                  <Form.Group className="mb-3 py-2" controlId="indice">
                    <Form.Label className='text-white'>Índice do Juro</Form.Label>
                    <Form.Control className='bg-transparent border-bank border-0 placerholder-color-white' type="text" mask='' placeholder="inflacao" {...register('indice')} />
                  </Form.Group>
                  <Form.Group className="mb-3 py-2" controlId="orgao">
                    <Form.Label className='text-white'>Órgão</Form.Label>
                    <Form.Control className='bg-transparent border-bank border-0 text-white' type="text" mask='' placeholder="orgao"{...register('orgao')} />
                  </Form.Group>
                  <Form.Group className="mb-3 py-2" controlId="valor">
                    <Form.Label className='text-white'>Valor</Form.Label>
                    <Form.Control className='bg-transparent border-bank border-0 text-white' type="text" mask='' placeholder="valor"{...register('valor')} />
                  </Form.Group>
                  <Form.Group className="mb-3 py-2" controlId="data">
                    <Form.Label className='text-white'>Data de ref.</Form.Label>
                    <Form.Control className='bg-transparent border-bank border-0 text-white' type="date" mask='' {...register('data')} />
                  </Form.Group>
                  <Row className='d-flex align-item-center py-2'>
                    <Button variant="primary" className='border-primary' type="submit" onClick={handleSubmit(newJuros)}>
                      Publica Juro
                    </Button>
                  </Row>
                </Form>
              </Row>
            </div>
          </div>
        </div>
      ) : ''}
      {mmoeda == true ? (
        <div class="py-12 bg-opacity-5 bg-gray-250 shadow-lg backdrop-blur-md transition duration-500 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0">
          <div role="alert" class=" bg-opacity-50 px-24 py-10 shadow-lg backdrop-blur-md max-sm:px-8 flex items-center justify-center">
            <div class="relative text-white py-8 px-5 md:px-10 bg-black rounded-xl border-t-2 border-b-2 border-[#000AFF]">
              <Row>
                <div class='flex justify-between'>
                  <p>Criar Nova Moeda</p>
                  <div onClick={() => Modal('moedas')} className='fixed-top-end'>
                    <Exclude />
                  </div>
                </div>
              </Row>
              <Row>
                <Form className='py-2'>
                  <Form.Group className="mb-3 py-2" controlId="moeda">
                    <Form.Label className='text-white'>Nome da Moeda</Form.Label>
                    <Form.Control className='bg-transparent border-bank border-0 placerholder-color-white' type="text" mask='' placeholder="Nome" {...register('moeda')} />
                  </Form.Group>
                  <Form.Group className="mb-3 py-2" controlId="valor">
                    <Form.Label className='text-white'>Valor da Moeda</Form.Label>
                    <Form.Control className='bg-transparent border-bank border-0 text-white' type="text" mask='' placeholder="Valor" {...register('valor')} />
                  </Form.Group>
                  <Row className='d-flex align-item-center py-2'>
                    <Button variant="primary" className='border-primary' type="submit" onClick={handleSubmit(newMoeda)}>
                      Lança Moeda
                    </Button>
                  </Row>
                </Form>
              </Row>
            </div>
          </div>
        </div>
      ) : ''}
      {minflacao == true ? (
        <div class="py-12 bg-opacity-5 bg-gray-250 shadow-lg backdrop-blur-md transition duration-500 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0">
          <div role="alert" class=" bg-opacity-50 px-24 py-10 shadow-lg backdrop-blur-md max-sm:px-8 flex items-center justify-center">
            <div class="relative text-white py-8 px-5 md:px-10 bg-black rounded-xl border-t-2 border-b-2 border-[#000AFF]">
              <Row>
                <div class='flex justify-between'>
                  <p>Criar Nova Inflação</p>
                  <div onClick={() => Modal('inflacao')} className='fixed-top-end'>
                    <Exclude />
                  </div>
                </div>
              </Row>
              <Row>
                <Form className='py-2'>
                  <Form.Group className="mb-3 py-2" controlId="indice">
                    <Form.Label className='text-white'>Índice da Inflação</Form.Label>
                    <Form.Control className='bg-transparent border-bank border-0 placerholder-color-white' type="text" mask='' placeholder="inflacao" {...register('indice')} />
                  </Form.Group>
                  <Form.Group className="mb-3 py-2" controlId="orgao">
                    <Form.Label className='text-white'>Órgão</Form.Label>
                    <Form.Control className='bg-transparent border-bank border-0 text-white' type="text" mask='' placeholder="orgao"{...register('orgao')} />
                  </Form.Group>
                  <Form.Group className="mb-3 py-2" controlId="valor">
                    <Form.Label className='text-white'>Valor</Form.Label>
                    <Form.Control className='bg-transparent border-bank border-0 text-white' type="text" mask='' placeholder="valor"{...register('valor')} />
                  </Form.Group>
                  <Form.Group className="mb-3 py-2" controlId="data">
                    <Form.Label className='text-white'>Data de ref.</Form.Label>
                    <Form.Control className='bg-transparent border-bank border-0 text-white' type="date" mask='' {...register('data')} />
                  </Form.Group>
                  <Row className='d-flex align-item-center py-2'>
                    <Button variant="primary" className='border-primary' type="submit" onClick={handleSubmit(newInflacao)}>
                      Publica Inflação
                    </Button>
                  </Row>
                </Form>
              </Row>
            </div>
          </div>
        </div>
      ) : ''}
    </BaseBar>
  )
}

export default index;