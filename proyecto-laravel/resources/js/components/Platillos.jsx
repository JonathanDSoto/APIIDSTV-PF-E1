import React from 'react'
import Sidebar from '../components/Sidebar'


export default function Platillos() {
  return (
    <div className="bg-white shadow-md  rounded-3xl p-4">
          <div className="flex-none lg:flex">
            <div className=" h-full w-full lg:h-48 lg:w-44 lg:mb-0 mb-3">
              <img
                src="/sushi.png"
                alt="Just a flower"
                className=" w-36 lg:w-full mx-auto lg:mx-0 object-scale-down lg:object-cover lg:h-48 rounded-2xl"
              />
            </div>
            <div className="flex-auto ml-3 justify-evenly py-2">
              <div className="flex flex-wrap ">
                <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                  Pedido
                </div>
                <h2 className="flex-auto text-lg font-medium">
                  Sushi de Pollo
                </h2>
              </div>
              <p className="mt-3"></p>
              <div className="flex py-4 flex-nowrap text-sm text-gray-600">
                <div className="flex-1 inline-flex items-center">
                  <h2 className=''>Ingredientes:</h2>
                </div>
              </div>

              <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
              <div className="flex space-x-3 text-sm font-medium">
                <div className="flex-auto md:flex-col flex gap-2">
                  <button className=" flex items-center justify-center rounded-md border hover:bg-green-700 border-green-700 bg-green-500 text-white transition-all duration-300 py-2 px-5" type="submit">
                    Editar
                  </button>
                  <button className=" flex items-center justify-center rounded-md border hover:bg-red-300 hover:text-white text-red-500 border-red-500 transition-all duration-300 py-2 px-5" type="submit">
                    Eliminar
                  </button>
                </div>
              </div>
             
            </div>
          </div>
        </div>
  )
}
