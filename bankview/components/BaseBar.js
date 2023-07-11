import React, { useState } from 'react'
import BottomBar from './Bar/BottomBar'
import TopBar from './Bar/TopBar'
import Logo from './Logo/Logo'
import MenuLogo from './Logo/MenuLogo'
import { Container, Offcanvas } from 'react-bootstrap'
import { useRouter } from 'next/router'
import OffcanvasBar from './Bar/OffcanvasBar'

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

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className='sticky-top d-flex w-100'>
                <TopBar />
                <div className='position-absolute w-100 h-100 d-flex justify-content-between p-2'>
                    <div className='w-100 h-100 d-flex '>
                        <img src='/logo.svg' onClick={() => (Gomenu())} />
                        <a onClick={() => (Gobolsa())} class='px-4 text-white hover:text-[#000AFF]'>Bolsa</a>
                    </div>
                    <div className='w-100 h-100 d-flex justify-content-end'>
                        <a onClick={() => (Gotesouro())} class='px-4 text-white hover:text-[#000AFF]'>Tesouro</a>
                        <img className='fixed-start' src='/userNew.svg' onClick={handleShow} />
                    </div>
                </div>
            </div>
            <div class='mb-5'>
                <Container>
                    {props.children}
                </Container>
            </div>
            <div className='fixed-bottom position-fixed-bottom d-flex mw-100 align-items-center'>
                <BottomBar />
                <div className='position-absolute w-100 h-100 d-flex align-items-center'>
                    <p className='text-white text-center w-100 fs-4'>Renato Ostemberg dos Santos</p>
                </div>
            </div>


            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <div className='d-flex fixed-top-end w-100 text-white align-items-center justify-content-center'>
                    <OffcanvasBar className='fixed-bottom' />
                    <Offcanvas.Header className='position-absolute'>
                        <Offcanvas.Title>Renato Ostemberg dos Santos</Offcanvas.Title>
                    </Offcanvas.Header>
                </div>
                <Offcanvas.Body className='text-white'>
                    <div className='d-flex w-100 py-3 text-white align-items-center justify-content-center'>
                        <MenuLogo />
                    </div>
                    <div class='bg-[#000AFF] py-3 mx-5'>
                    </div>
                </Offcanvas.Body>
                <div className='d-flex fixed-bottom-end w-100 text-white align-items-center justify-content-center'>
                    <OffcanvasBar className='fixed-bottom' />
                    <p className='position-absolute'>Version ~.~</p>
                </div>
            </Offcanvas>
        </div>
    )
}

export default BaseBar