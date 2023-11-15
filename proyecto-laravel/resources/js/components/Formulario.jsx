import React from 'react';
import { saveAs } from 'file-saver';


const imageUrl = '';

const handleDownload = () => {
  const fileName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
  saveAs(imageUrl, fileName);
};

export default function Formulario() {
  return (
    <div className=" flex justify-center items-center h-screen -mt-14">
      <form className="flex flex-col justify-center items-center gap-10 w-full max-w-xs text-center" action="index.html">
        <div className="fromGroup">
          <label className="text-white block capitalize form-label">Nombre del platillo</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              className="form-control py-2 text-center"
              placeholder="Ingresar"
            />
          </div>
        </div>
        <div className="fromGroup">
          <label className="text-white block capitalize form-label font-bold ">Ingredientes</label>
          <div className="relative">
            <input
              type="text"
              name="password"
              className="form-control py-2 text-center "
              placeholder="Ingresar"
            />
          </div>
        </div>


        <div>
          <img className="text-white mx-auto" src={"galery.png"} alt="Imagen" />
          <button className='text-white' onClick={handleDownload}>Descargar Imagen</button>
        </div>
<div className='flex gap-4 '>
        <button className="btn rounded-md border hover:bg-red-700 border-red-700 bg-red-500 text-white py-1 px-3 " type="submit">
          Cancelar
        </button>
      
        <button className="btn rounded-md border hover:bg-green-700 border-green-700 bg-green-500 text-white py-1 px-3">Guardar</button>
        </div>

      </form>
    </div>
  );
}
