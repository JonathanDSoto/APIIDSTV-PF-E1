import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'

export default function CardInventory({ name, comidas, description,description2, option, price, conxt, conxt2,boton, checkpoint }) {
  let descriptionColor, descriptionColor2;

  switch (description) {
    case 'Agotado':
      descriptionColor = 'text-red-700';
      break;
    case 'Cantidad baja':
      descriptionColor = 'text-yellow-500';
      break;
      case 'Entregada':
        descriptionColor = 'text-green-700';
        break;

    case 'Disponible':
      descriptionColor = 'text-green-700';
      break;
    default:
      descriptionColor = 'text-black';
  }


  switch (checkpoint) {
    case 'Cancelada':
      descriptionColor2 = 'text-red-700';
      break;
    case 'Pendiente':
      descriptionColor2 = 'text-yellow-500';
      break;
      case 'Entregada':
        descriptionColor2 = 'text-green-700';
        break;
  }

  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
  };

  useEffect(() => {
    let timeout;
    if (showAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false);
      }, 2000); // Cambia este valor (en milisegundos) para ajustar la duración de la alerta
    }


  return () => {
    clearTimeout(timeout);
  };
}, [showAlert]);

 

  return (
    
    <div className="bg-white shadow-md rounded-2xl p-4 mb-2 mx-auto sm:w-2/3 md:w-1/2 flex flex-col">
      <div className="flex items-center">
        <img
          src={comidas}
          alt="Sushi de Pollo"
          className="w-24 h-24 object-cover rounded-2xl mb-6 mr-12"
        />
        <div className="flex-grow">
          <div className="text-xs text-blue-700 font-medium">{option}</div>
          
          <h2 style={{ fontSize: '2.0rem' }} className="font-medium">{name}</h2>
          <div className="lg:flex items-center">
            <button style={{ fontSize: '1.2rem' }} className={`mr-1 ${descriptionColor}`}>{description}</button>
          </div>
          <div className="lg:flex items-center">
            <button style={{ fontSize: '1.2rem' }} className={`mr-1 ${descriptionColor}`}>{description2}</button>
          </div>

          <div className="lg:flex items-center">
            <button style={{ fontSize: '1.2rem' }} className={`mr-1 ${descriptionColor2}`}>{checkpoint}</button>
          </div>


          <div className="lg:flex items-center">
            <button style={{ fontSize: '1.2rem' }} className={`mr-1 ${descriptionColor}`}>{price}</button>
          </div>
          <div className="text-xs text-blue-700 font-medium">{conxt}</div>
          <div className="text-xs text-black font-medium">{conxt2}</div>
          <div className="flex space-x-3 text-sm font-medium mt-2">
            
            <NavLink to='/editinventory' className="rounded-md border hover:bg-green-700 border-green-700 bg-green-500 text-white py-1 px-3" >
              Editar
            </NavLink>
            <button className="rounded-md border hover:bg-red-300 hover:text-white text-red-500 border-red-500 py-1 px-3" type="submit">
              Eliminar
            </button> 

            <button
          className="rounded-md border hover:bg-blue-300 hover:text-white text-blue-500 border-purple-500 py-1 px-3"
          type="button"
          onClick={handleAlert}
        >
          {boton}
        </button>

            

           
          </div>

          {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50 -mt-10">
          <div className="bg-orange-300 border border-gray-200 shadow-md rounded-lg p-6">
            <p>Esta orden ya esta marcada como completada</p>
          </div>
        </div>
      )}

        </div>
      </div>
     
    </div>

    
  
  );
}
