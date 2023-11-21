import React from 'react'
import Form2 from '../components/Form2'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Layout from '../layouts/Layout'
import FormInv from '../components/FormInv'

export default function EditInventory() {
  return (
    <Layout>
        <div className='overflow-scroll'>
        <h1 className='text-white font-bold text-4xl text-center mt-10'>Agregar Producto</h1>
      <div className='flex justify-center items-center h-screen'>
        <div className='w-full max-w-xs'>
         
          <FormInv present="Nombre del producto " elements="Cantidad maxima" elements2="Cantidad minima"/>
          
        </div>
      </div>
      </div>
    </Layout>
  )
}