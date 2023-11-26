import React from 'react';
import Sidebar from '../components/Sidebar';
import CardInventory from '../components/CardInventory';
import Navbar from '../components/Navbar';
import Layout from '../layouts/Layout';
import NavbarInv from '../components/NabvarInv';
import TableClients from '../components/TableClients';
import NavbarClient from '../components/NavbarClient';

export default function Clientes() {
  return (
    <Layout>
      <div className='overflow-scroll'>

        <NavbarClient section="Modulo de clientes" addBtn="Agregar producto" />
        <main className='h-screen mt-10 grid grid-cols-1 md:flex md:flex-wrap md:justify-center  -mb-28'>
         
          <TableClients name="Carlos Perez"  conxt3="28/11/2023 " description="Entregada" conxt="2 California roll" conxt2="6122234545" conxt4="Domicilio"
           />
          
         

        </main>
      </div>
    </Layout>
  );
}