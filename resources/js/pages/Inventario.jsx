import React from 'react';
import Sidebar from '../components/Sidebar';
import CardInventory from '../components/CardInventory';
import Navbar from '../components/Navbar';
import Layout from '../layouts/Layout';
import NavbarInv from '../components/NabvarInv';

export default function Inventario() {
  return (
    <Layout>
      <div className='overflow-scroll'>

        <NavbarInv section="Modulo de inventario" addBtn="Agregar producto" />
        <main className='h-screen mt-10 grid grid-cols-1 md:flex md:flex-wrap md:justify-center  -mb-28'>
         
          <CardInventory name="Arroz"  description="Agotado" conxt="7kg" conxt2="Ingredientes" conxt3="27kg  " />
          
          
          

        </main>
      </div>
    </Layout>
  );
}

