import React, { useEffect, useState } from 'react'
import BaseBar from '../components/BaseBar'
import BasicDiv from '../components/BasicDiv'
import axios from "axios"
import { Col, Row, Table } from 'react-bootstrap'

export const index = () => {

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
            <Table striped bordered hover className='table-transparent textW'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </Table>
          </BasicDiv>
        </Col>
        <Col>
          <BasicDiv>

          </BasicDiv>
          <BasicDiv>

          </BasicDiv>
        </Col>
        <Col>
          <BasicDiv>

          </BasicDiv>
          <BasicDiv>

          </BasicDiv>
        </Col>
      </Row>
    </BaseBar>
  )
}
