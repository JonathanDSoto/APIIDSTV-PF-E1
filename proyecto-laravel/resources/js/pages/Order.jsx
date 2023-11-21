import React from 'react'
import Formulario from '../components/Formulario'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Layout from '../layouts/Layout'

export default function Crear() {
  return (
    <Layout>
        <div className='overflow-scroll'>
        <Navbar section="Agregar Orden" />
      <div className='flex justify-center items-center h-screen'>
        <div className='w-full max-w-xs'>
         
          <Formoder present="Nombre de platillo" elements="Segundo platillo" elements2="Tercer platillo"/>
          
        </div>
      </div>
      </div>
    </Layout>
  )
}