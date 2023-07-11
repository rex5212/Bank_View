import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Col, Row, Table } from 'react-bootstrap'
import Bgv1 from '../components/Background/Bgv1'
import Logo from '../components/Logo/Logo'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import BaseBg from '../components/BaseBg'
import { getAuth } from 'firebase/auth'


const index = () => {

  const { push, query } = useRouter()

  // const [bolsa, setBolsa] = useState([])
  const [isvisible, setIsvisible] = useState(false)
  const { register, handleSubmit } = useForm()

  // useEffect(() => {
  //   getAll()
  // }, [])

  function loga(dados) {
    // const email = dados.email
    // const password = dados.password 
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     if (user){
    //       push('/menu')
    //     }
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });

    push('/menu')
  }

  function visible() {
    setIsvisible(!isvisible)
  }


  // function getAll(){
  //   axios.get('/api/bolsa').then(resultado=>{
  //     setBolsa(resultado.data)
  //   })
  // }

  return (
    <BaseBg>
      <div className='d-flex align-items-center justify-content-center'>
        {isvisible == false ? (
          <div className='pt-5 ' onClick={() => (visible())}>
            <div class="px-24 py-12">
              <Logo />
            </div>
          </div>
        ) : (
          <div className='pt-5'>
            <div class="rounded-xl bg-gray-800 bg-opacity-50 px-24 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
              <div class="text-white">
                <div class="mb-8 flex flex-col items-center">
                  <div className='py-10' >
                    <Logo />
                  </div>
                  <h1 class="mb-2 text-5xl text-[#000AFF]">Bank View</h1>
                </div>
                <form action="#">
                  <div class="mb-8 flex flex-col items-center">
                    <span class="text-gray-300 text-center pb-2">Entre com seu E-mail</span>
                    <div class="mb-14 text-lg">
                      <input class="rounded-3xl border-none bg-[#000AFF] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="id@email.com" {...register('email')} />
                    </div>

                    <div class="mb-14 text-lg">
                      <input class="rounded-3xl border-none bg-[#000AFF] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="*********" {...register('password')} />
                    </div>

                    <div class="flex justify-center text-lg text-black">
                      <button type="submit" class="rounded-3xl bg-[#000AFF] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600" onClick={handleSubmit(loga)}>Login</button>
                    </div>

                    <a class="mt-4 text-lg text-center hover:text-yellow-600"><p>Não possui Login,</p><p class="text-[#000AFF] hover:text-yellow-600">Cadastre Aqui</p></a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </BaseBg>
  )
}

export default index

