import React from 'react';

export default function Card({name, comidas, description}) {
  return (
    <>
      <div className="bg-white shadow-md rounded-2xl p-4">
        <div className="flex flex-col sm:flex-row items-center"> {/* Agrega la clase 'items-center' para centrar verticalmente */}
          <img
            src={comidas}
            alt="Sushi de Pollo"
            className="w-24 h-24 object-cover rounded-2xl mb-2 sm:mb-0 sm:mr-2"
          />
          <div className="text-center sm:text-left"> {/* Agrega la clase 'text-center' para centrar horizontalmente en dispositivos pequeños */}
            <div className="text-xs text-blue-700 font-medium">Platillos</div>
            <h2 className="text-lg font-medium">{name}</h2>
            <div className="lg:flex items-center sm:text-center">
              <button className="mr-1 text-blue-500">{description}</button>
              {/* Agrega aquí la lista de ingredientes */}
            </div>
            <div className="flex space-x-3 text-sm font-medium mt-2">
              <button className="rounded-md border hover:bg-green-700 border-green-700 bg-green-500 text-white py-1 px-3" type="submit">
                Editar
              </button>

          

              <button className="rounded-md border hover:bg-red-300 hover:text-white text-red-500 border-red-500 py-1 px-3" type="submit">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
