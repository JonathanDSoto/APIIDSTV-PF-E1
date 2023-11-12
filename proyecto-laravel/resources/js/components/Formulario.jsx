import React from 'react';

export default function Formulario() {
  return (
    <div className=" flex justify-center items-center h-screen -mt-14">
      <form className="space-y-6 w-full max-w-xs text-center" action="index.html">
        <div className="fromGroup">
          <label className="block capitalize form-label">Nombre del platillo</label>
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
          <label className="block capitalize form-label">Ingredientes</label>
          <div className="relative">
            <input
              type="text"
              name="password"
              className="form-control py-2 text-center "
              placeholder="Ingresar"
            />
          </div>
        </div>
        <div className="fromGroup">
          <label className="block capitalize form-label">Ingredientes</label>
          <div className="relative">
            <input
              type="text"
              name="password"
              className="form-control py-2 text-center"
              placeholder="Ingresar"
            />
          </div>
        </div>
     
        
        <button className="btn rounded-md border hover:bg-green-700 border-green-700 bg-green-500 text-white py-1 px-3">Guardar</button>
      </form>
    </div>
  );
}
