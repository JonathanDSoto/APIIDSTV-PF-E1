import React from 'react'
import Formulario from '../components/Formulario'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Layout from '../layouts/Layout'


export default function Crear(){
    return(
        <Layout>
        <div className='overflow-scroll'>
             <Navbar section="Crear Orden" />
             <Formulario/>
        </div>
        </Layout>
    )

}