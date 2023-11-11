import React from 'react'
import ReactDOM from 'react-dom/client';
import Login from './pages/login';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Platillos from './components/Platillos';


export default function App() {

  return (
    <>
      
      <Platillos/>
      
    </>
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