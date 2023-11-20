import React from 'react'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Layout from '../layouts/Layout';
export default function Ordenes() {
    return (
        <Layout>
        <div className='overflow-scroll'>
            
            <Navbar section="Modulo de clientes" addBtn="Agregar" />
            <main className='h-screen mt-10 grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-4 -mb-32'>
            <img src="rest.png" alt="Logo restaurante" className='absolute top-0 right-0 mt-4 mr-20 w-28' />


                <Card name="Orden: 2 California Roll, 3 Tempura Roll" comidas={"rest.png"} checkpoint="Entregada" description=" Mesa 7" description2="Fehca: 28/11/2023" boton="Marcar Como completa"/>
                <Card name="2 California Roll, 3 Tempura Roll" comidas={"rest.png"} checkpoint="Entregada" description="Para llevar: Recogen en Restaurante" description2="Fehca: 28/11/2023" boton="Marcar Como completa"/>
                <Card name="2 California Roll, 3 Tempura Roll" comidas={"rest.png"} checkpoint="Cancelada" description="Para llevar: Domicilio 5 de mayo/Calle1/Calle2" description2="Fehca: 28/11/2023" boton="Marcar Como completa"/>
                <Card name="2 California Roll, 3 Tempura Roll" comidas={"rest.png"} checkpoint="Pendiente" description="Mesa 12" description2="Fehca: 28/11/2023" boton="Marcar Como completa"/>
                <Card name="2 California Roll, 3 Tempura Roll" comidas={"rest.png"} checkpoint="Pendiente" description="Para llevar: Recogen en Restaurante" description2="Fehca: 28/11/2023" boton="Marcar Como completa"/>
                <Card name="2 California Roll, 3 Tempura Roll" comidas={"rest.png"} checkpoint="Cancelada" description="Para llevar: Recogen en Restaurante" description2="Fehca: 28/11/2023" boton="Marcar Como completa"/>
                

            </main>

        </div>
        </Layout>
    )
}