import React from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Layout from '../layouts/Layout';

export default function Inventario() {
  return (
    <Layout>
    <div className='overflow-scroll'>
      
      <Navbar section="Modulo de inventario" addBtn="Agregar producto" />
      <main className='h-screen mt-10 grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-4 -mb-32'
        
      >
        <Card name="Arroz" comidas={"arroz.jpg"} description="Agotado" conxt="Cantidad actual: 7kg  " conxt2="Cantidad requerida: 27kg  " />
        <Card name="Aguacate" comidas={"descarga.jpg"} description="Cantidad baja" conxt="Cantidad actual: 7kg  "  conxt2="Cantidad requerida: 27kg  " />
        <Card name="Camaron" comidas={"camaron.jpg"} description="Disponible" conxt="Cantidad actual: 7kg  "  conxt2="Cantidad requerida: 27kg  "/>
        <Card name="Zanahoria" comidas={"zana.jpg"} description="Disponible" conxt="Cantidad actual: 7kg  "  conxt2="Cantidad requerida: 27kg  "/>
        <Card name="Soya" comidas={"soya.jpg"} description="Disponible" conxt="Cantidad actual: 7kg  "  conxt2="Cantidad requerida: 27kg  "/>
        <Card name="Surimi" comidas={"surimi.jpg"} description="Cantidad baja" conxt="Cantidad actual: 7kg  "  conxt2="Cantidad requerida: 27kg  "/>
       
      </main>
    </div>
    </Layout>
  );
}

