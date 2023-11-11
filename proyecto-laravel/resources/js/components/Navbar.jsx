import React from 'react'
import Sidebar from '../components/Sidebar'

export default function Navbar() {
  return (
    <nav className="bg-black p-7">
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-lg"></div>
        <div className="space-x-4">
          <a href="#" className="text-white">Bienvenido</a>
        
          
        </div>
      </div>
    </div>
    <Sidebar/>
  </nav>
);
};
   
 