import React from 'react'
import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import Layout from './layouts/Layout';
import Platillos from './pages/Platillos';
import Ordenes from './pages/Ordenes';


import Inventario from './pages/Inventario';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Clientes from './pages/Clientes';
import Inicio from './pages/Inicio';

import MakeOrder from './pages/MakeOrder';
import Productos from './pages/Productos';
import EditInventory from './pages/EditInventory';



export default function App() {

  return (
   
    
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Login/>}/>
      <Route path="/inicio" element={<Inicio/>}/> 
    
      <Route path="/platillos" element={<Platillos/>}/>
      <Route path="/ordenes" element={<Ordenes/>}/>
      <Route path="/inventario" element={<Inventario/>}/>

      <Route path="/makeorder" element={<MakeOrder/>}/>
      <Route path="/productos" element={<Productos/>}/>
      <Route path="/clientes" element={<Clientes/>}/>
      <Route path="/editinventory" element={<EditInventory/>}/>

      


  

    </Routes>
    
    </BrowserRouter>
   
  );
  
}



if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}