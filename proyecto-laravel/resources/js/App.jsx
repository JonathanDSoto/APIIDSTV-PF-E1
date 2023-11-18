import React from 'react'
import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import Layout from './layouts/Layout';
import Platillos from './pages/Platillos';
import Ordenes from './pages/Ordenes';
import Formulario from './components/Formulario';
import Crear from './pages/Crear';
import Inventario from './pages/Inventario';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Edits from './pages/Edits';
import Clientes from './pages/Clientes';



export default function App() {

  return (
   
    
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Login/>}/>
      <Route path="/crear" element={<Crear/>}/>
      <Route path="/platillos" element={<Platillos/>}/>
      <Route path="/ordenes" element={<Ordenes/>}/>
      <Route path="/inventario" element={<Inventario/>}/>
      <Route path="/edits" element={<Edits/>}/>
      <Route path="/clientes" element={<Clientes/>}/>
      


  

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