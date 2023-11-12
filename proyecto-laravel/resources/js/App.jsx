import React from 'react'
import ReactDOM from 'react-dom/client';
import Login from './pages/login';
import Layout from './layouts/Layout';
import Platillos from './pages/Platillos';
import Ordenes from './pages/Ordenes';
import Formulario from './components/Formulario';
import Crear from './pages/Crear';



export default function App() {

  return (

    <Layout>
      
      
      <Crear/>
      
    
    </Layout>
   
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