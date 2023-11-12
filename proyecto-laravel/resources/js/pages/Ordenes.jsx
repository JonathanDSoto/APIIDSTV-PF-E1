import React from 'react'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
export default function Ordenes() {
    return (
        <div >
            
            <Navbar section="Ordenes" addBtn="Agregar Orden" />
            <main className='mt-10 grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-4'>
 




                <Card name="2 California" comidas={"rest.png"} description="Ver Orden"/>
                <Card name="3 Mar y Tierra" comidas={"rest.png"} description="Ver Orden"/>
                <Card name="2 Gohan y 1 California" comidas={"rest.png"} description="Ver Orden"/>
                <Card name="2 Milenia Roll" comidas={"rest.png"} description="Ver Orden"/>
                <Card name="2 Queso Roll" comidas={"rest.png"} description="Ver Orden"/>
                <Card name="4 Tempura Roll" comidas={"rest.png"} description="Ver Orden"/>

            </main>

        </div>
    )
}