import React from 'react'
import Form2 from '../components/Form2'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Layout from '../layouts/Layout'

export default function MakeOrder() {
  return (
    <Layout>
        <div className='overflow-scroll'>
        <h1 className='text-white font-bold text-4xl text-center mt-10'>Agregar Orden</h1>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-full max-w-xs'>
         
          <Form2 present="Ingresa los platillos " elements="No. de mesa" elements2="Domicilio"/>
          
        </div>
      </div>
      </div>
    </Layout>
  )
}