import React from 'react'
import Sidebar from '../components/Sidebar'
import CardOrder from '../components/CardsOrder'
import Navbar from '../components/Navbar'
import Layout from '../layouts/Layout';
import NavbarOrder from '../components/NavbarOrder';
export default function Ordenes() {
    return (
        <Layout>
        <div className='overflow-scroll'>
            
            <NavbarOrder section="Ordenes" addBtn="Agregar Orden" />
            <main className='h-screen mt-10 grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-4 -mb-28'>
           


                <CardOrder name="2 California Roll, 3 Tempura Roll" comidas={"rest.png"} description="En restaurante: orden en Mesa 7"/>
                <CardOrder name="2 California Roll, 3 Tempura Roll" comidas={"rest.png"} description="Para llevar: Recogen en Restaurante"/>
                <CardOrder name="2 California Roll, 3 Tempura Roll" comidas={"rest.png"} description="Para llevar: Domicilio 5 de mayo"/>
                <CardOrder name="2 California Roll, 3 Tempura Roll" comidas={"rest.png"} description="Para llevar: Domicilio 5 de mayo"/>
                <CardOrder name="2 California Roll, 3 Tempura Roll" comidas={"rest.png"} description="Para llevar: Domicilio 5 de mayo"/>
                <CardOrder name="2 California Roll, 3 Tempura Roll" comidas={"rest.png"} description="Para llevar: Domicilio 5 de mayo"/>
                

            </main>

        </div>
        </Layout>
    )
}