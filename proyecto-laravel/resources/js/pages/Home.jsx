import React from 'react'
import Sidebar from '../components/Sidebar'
import Platillos from '../components/Platillos'
import Navbar from '../components/Navbar'
export default function Home() {
    return (
<div>
        <Navbar section="Platillos"/>
        <div className='mt-10 grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-4'>
             
             
            <Platillos name="California" comidas={"california.jpg"}/>
            <Platillos name="Mar y Tierra" comidas={"Sushi1.png"}/>
            <Platillos name="Gohan" comidas={"gohan.png"}/>
            <Platillos name="Milenia Roll" comidas={"milenia.jpeg"}/>
            <Platillos name="Queso Roll" comidas={"queso.jpg"}/>
            <Platillos name="Gohan" comidas={"gohan.png"}/>
            
        </div>

        </div>
    )
}
