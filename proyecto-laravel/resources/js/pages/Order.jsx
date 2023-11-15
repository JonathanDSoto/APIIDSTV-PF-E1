import React from 'react'
import Formulario from '../components/Formulario'
import Card from '../components/Card'
import Navbar from '../components/Navbar'


export default function Crear(){
    return(
        <div className='overflow-scroll'>
             <Navbar section="Crear Orden" />
             <Formulario/>
        </div>
    )

}