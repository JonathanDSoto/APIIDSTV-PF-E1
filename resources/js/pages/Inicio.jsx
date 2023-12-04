import React from 'react'
import CardHome from '../components/CardHome'
import Layout from '../layouts/Layout';

export default function Inicio() {

    const date = new Date();
    const hour = date.getHours();
    let time = '';

    if(hour < 12){
        time = 'días! 🌤️';
    }else if(hour >= 12 && hour < 18){
        time = 'tardes! ☀️';
    }else{
        time = 'noches! 🌙';
    }

    return (
        
        <Layout>
            <div className='overflow-y-auto h-screen'>

                <h1 className='text-white font-black text-6xl text-center mb-10 mt-10'>¡Bienvenido, buenas {time}</h1>
                <h1 className='text-white font-medium text-3xl text-center mt-3'>Sushi Bar | Página Administrativa</h1>
                
                <main className='mt-10 flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4'>
                    <CardHome name="Platillos" comidas={"sushiii.jpg"} description="Total de Platillos: 20" conxt="Platillos no disponibles: 7" conxt2="Platillos disponibles: 13" index={1} ruta="/platillos"/>
                    <CardHome name="Ordenes" comidas={"rest.png"} description="Total de Ordenes: 12" conxt="Ordenes completadas: 2" conxt2="Ordenes pendientes: 10" index={2} ruta="/ordenes"/>
                    <CardHome name="Inventario" comidas={"camaron.jpg"} description="Total de Productos: 22  " conxt="Productos agotados: 10" conxt2="Productos disponibles: 12" index={3} ruta="/inventario"/>
                </main>

            </div>
        </Layout>
    )
}