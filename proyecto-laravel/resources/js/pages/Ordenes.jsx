import React from 'react'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
export default function Ordenes() {
    return (
        <div>
            <Navbar section="Ordenes" addBtn="Agregar Orden" />
            <main className='mt-10 grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-4'>


                <Card name="California" comidas={"california.jpg"} description="Ver Orden"/>
                <Card name="Mar y Tierra" comidas={"Sushi1.png"} description="Ver Orden"/>
                <Card name="Gohan" comidas={"gohan.png"} description="Ver Orden"/>
                <Card name="Milenia Roll" comidas={"milenia.jpeg"} description="Ver Orden"/>
                <Card name="Queso Roll" comidas={"queso.jpg"} description="Ver Orden"/>
                <Card name="Gohan" comidas={"gohan.png"} description="Ver Orden"/>

            </main>

        </div>
    )
}