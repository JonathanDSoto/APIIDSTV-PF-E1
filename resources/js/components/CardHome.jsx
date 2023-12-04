import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'

export default function CardHome({ name, comidas, description,description2, option, price, conxt, conxt2,boton, checkpoint,  index=1 }) {
  const cardColors = ["bg-red-500", "bg-green-500", "bg-yellow-500"];
  const cardIndex = index;
  const cardColorClass = cardColors[cardIndex % cardColors.length];
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
      }, 2000); 
    }


  return () => {
    clearTimeout(timeout);
  };
}, [showAlert]);

 

  return (
    
    <div className={`${cardColorClass} shadow-md rounded-2xl mb-60 mx-4 p-7 flex flex-col max-w-md`}>
      <div className="flex items-center flex-col">
        <img
          src={comidas}
          alt="Sushi de Pollo"
          className="w-full max-h-60 object-cover rounded-2xl"
        />
        <div className="flex-grow mt-3 text-center">
          <div className="text-xs text-blue-700 font-medium">{option}</div>
          
          <h2 style={{ fontSize: '2.0rem' }} className="font-medium">{name}</h2>
          <div className="lg:flex items-center">
            <a style={{ fontSize: '1.4rem' }} className={`mr-1 ${descriptionColor}`}>{description}</a>
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
          <div className="text-md text-black font-medium">{conxt}</div>
          <div className="text-md text-black font-medium">{conxt2}</div>
          <div className="flex justify-center space-x-3 text-md font-semibold mt-10">
            
            

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
            <p>Esta orden ya esta marcada como Entregada</p>
          </div>
        </div>
      )}

        </div>
      </div>
     
    </div>

    
  
  );
}