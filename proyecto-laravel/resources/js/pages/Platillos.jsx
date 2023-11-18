import React from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Layout from '../layouts/Layout';


export default function Platillos() {
  return (
    <Layout>
    <div className='overflow-scroll'>
      <Navbar section="Platillos" addBtn="Agregar Platillo" />
      <main
        className='h-screen mt-10 grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-4 -mb-32'
        
      >
        <Card name="California" comidas={"california.jpg"} price="$130.50" description="Ingredientes: Arroz, Surimi, Aguacate, Camaron, Cangrejo, Alga" />
        <Card name="Mar y Tierra" comidas={"Sushi1.png"} price="$130.50" description="Ingredientes: Arroz, Surimi, Aguacate, Camaron, Cangrejo, Alga" />
        <Card name="Gohan" comidas={"gohan.png"} price="$130.50" description="Ingredientes: Arroz, Surimi, Aguacate, Camaron, Cangrejo, Alga" />
        <Card name="Milenia Roll" comidas={"milenia.jpeg"} price="$130.50" description="Ingredientes: Arroz, Surimi, Aguacate, Camaron, Cangrejo, Alga" />
        <Card name="Queso Roll" comidas={"queso.jpg"} price="$130.50" description="Ingredientes: Arroz, Surimi, Aguacate, Camaron, Cangrejo, Alga" />
        <Card name="Gohan" comidas={"gohan.png"} price="$130.50" description="Ingredientes: Arroz, Surimi, Aguacate, Camaron, Cangrejo, Alga" />
        <Card name="California" comidas={"california.jpg"} price="$130.50" description="Ingredientes: Arroz, Surimi, Aguacate, Camaron, Cangrejo, Alga" />
        <br />
        <br />
      </main>
    </div>
    </Layout>
  );
}

