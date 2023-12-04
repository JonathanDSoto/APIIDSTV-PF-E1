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
import EditarCliente from './components/EditarCliente';


export default function App() {

  return (
   
    
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Login/>}/>
      <Route path="/inicio" element={<Inicio/>}/> 
      <Route path="/makeorder" element={<MakeOrder/>}/>
    
      <Route path="/platillos" element={<Platillos/>}/>
      <Route path="/platillo/:id"/>

      <Route path="/ordenes" element={<Ordenes/>}/>
      <Route path="/orden/:id"/>

      <Route path="/inventario" element={<Inventario/>}/>
      <Route path='/producto/:id'/>

      <Route path="/clientes" element={<Clientes/>}/>
      <Route path="/cliente/:id" element={<EditarCliente />} />

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