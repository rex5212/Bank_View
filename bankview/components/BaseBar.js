import React from 'react'
import BottomBar from './Bar/BottomBar'
import TopBar from './Bar/TopBar'
import { Container } from 'react-bootstrap'
import { useRouter } from 'next/router'

const BaseBar = (props) => {

    const { push, query } = useRouter()

    function Gomenu() {
        push('/menu')
    }

    function Gobolsa() {
        push('/bolsa')
    }

    function Gotesouro() {
        push('/tesouro')
    }

    return (
        <div>
            <div className='sticky-top d-flex w-100'>
                <TopBar />
                <div className='position-absolute w-100 h-100 d-flex justify-content-between p-2'>
                    <div className='w-100 h-100 d-flex '>
                        <img src='/logo.svg' onClick={() => (Gomenu())}/>
                        <a onClick={() => (Gobolsa())} class='px-4 text-white hover:text-[#000AFF]'>Bolsa</a>
                    </div>
                    <div className='w-100 h-100 d-flex justify-content-end'>
                        <a onClick={() => (Gotesouro())} class='px-4 text-white hover:text-[#000AFF]'>Tesouro</a>
                        <img className='fixed-start' src='/userNew.svg' />
                    </div>
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