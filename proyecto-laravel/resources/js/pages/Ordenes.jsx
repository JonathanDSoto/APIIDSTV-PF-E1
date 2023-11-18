import React from 'react'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Layout from '../layouts/Layout';
export default function Ordenes() {
    return (
        <Layout>
        <div className='overflow-scroll'>
            
            <Navbar section="Ordenes" addBtn="Agregar Orden" />
            <main className='h-screen mt-10 grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-4 -mb-32'>
 


                <Card name="2 California Roll, 3 Tempura Roll" comidas={"rest.png"} description="Mesa 7"/>
                <Card name="2 California Roll, 3 Tempura Roll" comidas={"rest.png"} description="Para llevar: Recogen en Restaurante"/>
                <Card name="2 California Roll, 3 Tempura Roll" comidas={"rest.png"} description="Para llevar: Domicilio 5 de mayo"/>
                <Card name="2 California Roll, 3 Tempura Roll" comidas={"rest.png"} description="Ver Orden"/>
                <Card name="2 California Roll, 3 Tempura Roll" comidas={"rest.png"} description="Ver Orden"/>
                <Card name="2 California Roll, 3 Tempura Roll" comidas={"rest.png"} description="Ver Orden"/>
                

            </main>

        </div>
        </Layout>
    )
}