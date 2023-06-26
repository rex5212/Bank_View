import React from 'react'
import BottomBar from './Bar/BottomBar'
import TopBar from './Bar/TopBar'
import { Container } from 'react-bootstrap'

const BaseBar = (props) => {
    return (
        <div>
            <div className='sticky-top d-flex w-100'>
                <TopBar/>
                <div className='position-absolute w-100 h-100 d-flex justify-content-between p-2'>
                    <img src='/logo.svg'/>
                    <img src='/userNew.svg'/>
                </div>
            </div>
                <Container>
                    {props.children}
                </Container>
            <div className='fixed-bottom d-flex mw-100 align-items-center'> 
                <BottomBar />
                <div className='position-absolute w-100 h-100 d-flex align-items-center'>
                    <p className='text-white text-center w-100 fs-4'>Renato Ostemberg dos Santos</p>
                </div>
            </div>
        </div>
    )
}

export default BaseBar