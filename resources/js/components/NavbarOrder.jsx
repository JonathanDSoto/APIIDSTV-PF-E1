import React from 'react'
import Sidebar from '../components/Sidebar'
import { NavLink } from 'react-router-dom'

export default function NavbarOrder({section, addBtn}) {
  return (
    <nav className='flex justify-around items-center mt-8 md:flex-row flex-col'>
      <div>
        <h1 className='text-white font-bold text-4xl'>{section}</h1>
      </div>
      
      <NavLink to="/makeorder" className="btn bg-lime-500 block text-center">{addBtn}</NavLink>
      
    </nav>
  );
};
