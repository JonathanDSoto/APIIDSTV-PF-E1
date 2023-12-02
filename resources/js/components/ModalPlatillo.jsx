import React, {useEffect, useState} from "react";

const ModalPlatillo = ({ isOpen, onClose }) => {
    if (!isOpen) return null;


    const [arroz, setArroz] = useState(0);
    const [camaron, setCamaron] = useState(0);
    const [alga, setAlga] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Nuevo Elemento:', nuevoElemento);
        onClose(); 
    };

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
            <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex">
                <button className="absolute top-0 right-0 p-4" onClick={onClose}>
                    <span className="text-xl">×</span>
                </button>
                <div>
                    <h2 className='text-center mb-5'>Platillos</h2>
                    <div>

                    <label htmlFor="nuevoElemento" className="block mb-2 text-sm font-medium text-gray-900">
                           Nombre del platillo
                        </label>
                        <input
                            type="text"
                            id="nuevoElemento"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                            placeholder="Ingresar"
                            required
                        />

                        <label htmlFor="nuevoElemento" className="block mb-2 text-sm font-medium text-gray-900">
                            Precio
                        </label>
                        <input
                            type="number"
                            id="nuevoElemento"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                            placeholder= "Ingresar precio"
                            required
                        />

                        {/*test for ingredients - TODO: Add all ingredients*/}
                        <label htmlFor="arroz" className="block mb-2 text-sm font-medium text-gray-900">
                            Arroz
                        </label>
                        <input
                            value={arroz}
                            onChange={(e) => setArroz(e.target.value)}
                            type="number"
                            id="arroz"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                            placeholder="Ingresar cantidad arroz"
                            required
                        />
                        <label htmlFor="camaron" className="block mb-2 text-sm font-medium text-gray-900">
                            Camarón
                        </label>
                        <input
                            value={camaron}
                            onChange={(e) => setCamaron(e.target.value)}
                            type="number"
                            id="camaron"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                            placeholder="Ingresar cantidad camarón"
                            required
                        />
                        <label htmlFor="alga" className="block mb-2 text-sm font-medium text-gray-900">
                            Alga nori
                        </label>
                        <input
                            value={alga}
                            onChange={(e) => setAlga(e.target.value)}
                            type="number"
                            id="nuevoElemento"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                            placeholder="Ingresar"
                            required
                        />
                        
                        <div className="flex justify-center mt-4">
              <button
                type="button"
                className="btn rounded-md border hover:bg-red-700 border-red-700 bg-red-500 text-white py-1 px-3 mr-2"
                onClick={onClose} // Puedes cambiar esto a onClose si este botón también debe cerrar la modal
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="btn rounded-md border hover:bg-green-700 border-green-700 bg-green-500 text-white py-1 px-3 ml-2"
              >
                Guardar
              </button>
            </div>
                    </div>
                </div>
            </div>
            
        </div>

    );
};

export default ModalPlatillo;