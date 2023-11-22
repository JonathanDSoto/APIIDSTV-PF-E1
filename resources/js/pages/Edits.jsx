import React from 'react'
import Formulario from '../components/Formulario'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Layout from '../layouts/Layout'

export default function Edits() {
  return (
    <Layout>
        <div className='overflow-scroll'>
        <h1 className='text-white font-bold text-4xl text-center mt-10'>Editar Información</h1>
    
      <div className='flex justify-center items-center h-screen'>
        <div className='w-full max-w-xs'>
         
          <Formulario  present="Nombre de platillo" elements="ingredientes" elements2="Precio"/>
          
        </div>
      </div>
      </div>
    </Layout>
  )
}