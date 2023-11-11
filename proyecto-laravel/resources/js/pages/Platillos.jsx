import React from 'react'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
export default function Platillos() {
    return (
        <div>
            <Navbar section="Platillos" addBtn="Agregar Platillo" />
            <main className='mt-10 grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-4'>


                <Card name="California" comidas={"california.jpg"}  />
                <Card name="Mar y Tierra" comidas={"Sushi1.png"} />
                <Card name="Gohan" comidas={"gohan.png"} />
                <Card name="Milenia Roll" comidas={"milenia.jpeg"} />
                <Card name="Queso Roll" comidas={"queso.jpg"} />
                <Card name="Gohan" comidas={"gohan.png"} />

            </main>

        </div>
    )
}
