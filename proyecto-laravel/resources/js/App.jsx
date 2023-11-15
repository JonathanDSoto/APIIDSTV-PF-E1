import React from 'react'
import ReactDOM from 'react-dom/client';
import Login from './pages/login';
import Layout from './layouts/Layout';
import Platillos from './pages/Platillos';
import Ordenes from './pages/Ordenes';
import Formulario from './components/Formulario';
import Crear from './pages/Crear';
import Inventario from './pages/Inventario';
import {BrowserRouter, Routes, Route } from 'react-router-dom';



export default function App() {

  return (
    <div className="loginwrapper bg-cover bg-no-repeat bg-center bg-[url('/public/Example2.jpg')]" >
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Login/>}/>
      <Route path="/platillos" element={<Platillos/>}/>
      <Route path="/ordenes" element={<Ordenes/>}/>
      <Route path="/inventario" element={<Inventario/>}/>

    </Routes>
    
    </BrowserRouter>
    </div>
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