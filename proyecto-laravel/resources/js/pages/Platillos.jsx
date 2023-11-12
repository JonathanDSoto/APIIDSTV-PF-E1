import React from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

export default function Platillos() {
  return (
    <div className='overflow-scroll'>
      <Navbar section="Platillos" addBtn="Agregar Platillo" />
      <main
        className='h-screen mt-10 grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-4'
        
      >
        <Card name="California" comidas={"california.jpg"} description="Ver Ingredientes" />
        <Card name="Mar y Tierra" comidas={"Sushi1.png"} description="Ver Ingredientes" />
        <Card name="Gohan" comidas={"gohan.png"} description="Ver Ingredientes" />
        <Card name="Milenia Roll" comidas={"milenia.jpeg"} description="Ver Ingredientes" />
        <Card name="Queso Roll" comidas={"queso.jpg"} description="Ver Ingredientes" />
        <Card name="Gohan" comidas={"gohan.png"} description="Ver Ingredientes" />
        <Card name="California" comidas={"california.jpg"} description="Ver Ingredientes" />
        <Card name="Mar y Tierra" comidas={"Sushi1.png"} description="Ver Ingredientes" />
        <Card name="Gohan" comidas={"gohan.png"} description="Ver Ingredientes" />
        <Card name="Milenia Roll" comidas={"milenia.jpeg"} description="Ver Ingredientes" />
        <Card name="Queso Roll" comidas={"queso.jpg"} description="Ver Ingredientes" />
        <Card name="Gohan" comidas={"gohan.png"} description="Ver Ingredientes" />
      </main>
    </div>
  );
}

