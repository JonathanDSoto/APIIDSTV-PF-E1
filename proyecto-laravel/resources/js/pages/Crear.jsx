import React from 'react'
import Formulario from '../components/Formulario'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Layout from '../layouts/Layout'

export default function Crear() {
  return (
    <Layout>
        <div className='overflow-scroll'>
        <h1 className='text-white font-bold text-4xl text-center mt-10'>Agregar Información</h1>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-full max-w-xs'>
        <img src="rest.png" alt="Logo restaurante" className='absolute top-0 right-0 mt-4 mr-20 w-28' />
          <Formulario present="Nombre de platillo" elements="ingredientes" elements2="Precio"/>
          
        </div>
      </div>
      </div>
    </Layout>
  )
}