import React from 'react';

export default function Card({ name, comidas, description, option, price }) {
  let descriptionColor;

  switch (description) {
    case 'Agotado':
      descriptionColor = 'text-red-700';
      break;
    case 'Cantidad baja':
      descriptionColor = 'text-yellow-500';
      break;
    case 'Disponible':
      descriptionColor = 'text-green-700';
      break;
    default:
      descriptionColor = 'text-black';
  }
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 mb-4 mx-auto sm:w-2/3 md:w-1/2 flex flex-col">
      <div className="flex items-center">
        <img
          src={comidas}
          alt="Sushi de Pollo"
          className="w-24 h-24 object-cover rounded-2xl mb-2 mr-2"
        />
        <div className="flex-grow">
          <div className="text-xs text-blue-700 font-medium">{option}</div>
          
          <h2 style={{ fontSize: '2.0rem' }} className="font-medium">{name}</h2>
          <div className="lg:flex items-center">
            <button style={{ fontSize: '1.2rem' }} className={`mr-1 ${descriptionColor}`}>{description}</button>
          </div>
          <div className="lg:flex items-center">
            <button style={{ fontSize: '1.2rem' }} className={`mr-1 ${descriptionColor}`}>{price}</button>
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
  );
}
