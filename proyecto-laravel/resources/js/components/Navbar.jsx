import React from 'react'
import Sidebar from '../components/Sidebar'

export default function Navbar({section, addBtn}) {
  return (
    <nav className='flex justify-around items-center mt-5'>
      <div>
        <h1 className='font-black text-4xl '>{section}</h1>
      </div>
      
        <button className="rounded-md hover:bg-blue-700 bg-blue-500 text-white py-1 px-3" type="submit">
         {addBtn}
        </button>
      
    </nav>
  );
};

