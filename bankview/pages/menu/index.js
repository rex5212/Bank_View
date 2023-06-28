import React, { useEffect, useState } from 'react'
import BasicDiv from '../../components/BasicDiv'
import axios from "axios"
import { Col, Row, Table } from 'react-bootstrap'
import BaseBar from '../../components/BaseBar'
import BasicTable from '../../components/Table/BasicTable'

const index = () => {

  const [menu, setMenu] = useState([])

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    axios.get('/api/menu').then(resultado => {
      setMenu(resultado.data)
    })
  }

  return (
    <BaseBar>
      <Row md={3}>
        <Col>
          <p className='text-white px-4 pt-4'>dashdbsa vdsagdvasgdv vdasgdvas das dvasdvasd vhasg vdash dvas</p>
          <BasicDiv>
            <thead>
              <tr>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Category
                </th>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Price
                </th>
                <th scope="col" class="p-4">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y opacity-100">
              <tr class="hover:bg[#000AFF]">
                <td class="py-4 px-6 text-sm font-medium text-white whitespace-nowrap">Desktop PC</td>
                <td class="py-4 px-6 text-sm font-medium text-white whitespace-nowrap">$1999</td>
                <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <a href="#" class="text-[#000AFF] hover:underline">Edit</a>
                </td>
              </tr>
            </tbody>
          </BasicDiv>
        </Col>
        <Col>
          <BasicDiv>
            <thead>
              <tr>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Category
                </th>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Price
                </th>
                <th scope="col" class="p-4">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y opacity-100">
              <tr class="hover:bg[#000AFF]">
                <td class="py-4 px-6 text-sm font-medium text-white whitespace-nowrap">Desktop PC</td>
                <td class="py-4 px-6 text-sm font-medium text-white whitespace-nowrap">$1999</td>
                <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <a href="#" class="text-[#000AFF] hover:underline">Edit</a>
                </td>
              </tr>
            </tbody>
          </BasicDiv>
          <BasicDiv>
            <thead>
              <tr>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Category
                </th>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Price
                </th>
                <th scope="col" class="p-4">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y opacity-100">
              <tr class="hover:bg[#000AFF]">
                <td class="py-4 px-6 text-sm font-medium text-white whitespace-nowrap">Desktop PC</td>
                <td class="py-4 px-6 text-sm font-medium text-white whitespace-nowrap">$1999</td>
                <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <a href="#" class="text-[#000AFF] hover:underline">Edit</a>
                </td>
              </tr>
            </tbody>
          </BasicDiv>
        </Col>
        <Col>
          <BasicDiv>
            <thead>
              <tr>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Category
                </th>
                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                  Price
                </th>
                <th scope="col" class="p-4">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y opacity-100">
              <tr class="hover:bg[#000AFF]">
                <td class="py-4 px-6 text-sm font-medium text-white whitespace-nowrap">Desktop PC</td>
                <td class="py-4 px-6 text-sm font-medium text-white whitespace-nowrap">$1999</td>
                <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                  <a href="#" class="text-[#000AFF] hover:underline">Edit</a>
                </td>
              </tr>
            </tbody>
          </BasicDiv>
          <BasicDiv>
            <BasicTable>
              <thead>
                <tr>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Category
                  </th>
                  <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase opacity-100	">
                    Price
                  </th>
                  <th scope="col" class="p-4">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y opacity-100">
                <tr class="hover:bg[#000AFF]">
                  <td class="py-4 px-6 text-sm font-medium text-white whitespace-nowrap">Desktop PC</td>
                  <td class="py-4 px-6 text-sm font-medium text-white whitespace-nowrap">$1999</td>
                  <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                    <a href="#" class="text-[#000AFF] hover:underline">Edit</a>
                  </td>
                </tr>
              </tbody>
            </BasicTable>
          </BasicDiv>
        </Col>
      </Row>
    </BaseBar>
  )
}

export default index;