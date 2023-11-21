import React from 'react'
import Sidebar from '../components/Sidebar'
import CardHome from '../components/CardHome'
import Navbar from '../components/Navbar'
import Layout from '../layouts/Layout';
export default function Inicio() {
    return (
        <Layout>
            <div className='overflow-scroll'>

                <h1 className='text-white font-bold text-4xl text-center mt-10'>Sushi Bar Pagina Administrativa</h1>
                
              
                
                <main className='h-screen mt-10 grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-4 -mb-28'>
                    <CardHome name="Platillos" comidas={"sushiii.jpg"} description="Total de platillos: 20" conxt="Platillos no disponibles: 7  " conxt2="Platillos disponibles: 13  " />
                    <CardHome name="Ordenes" comidas={"rest.png"} description="Total de Ordenes: 12" conxt="Ordenes completadas: 2  " conxt2="Ordenes pendientes: 10  " />
                    <CardHome name="Inventario" comidas={"camaron.jpg"} description="Total de productos: 22  " conxt="Productos agotados: 10" conxt2="Productos disponibles: 12  " />
                </main>

            </div>
        </Layout>
    )
}