import React from 'react';

const ModalClient = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

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
                    <h2 className='text-center mb-5'>Agregar Registro</h2>
                    <div>

                        <label htmlFor="nuevoElemento" className="block mb-2 text-sm font-medium text-gray-900">
                            Nombre del cliente
                        </label>
                        <input
                            type="text"
                            id="nuevoElemento"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Ingresar"
                            required
                        />

<label htmlFor="nuevoElemento" className="block mb-2 text-sm font-medium text-gray-900">
                            Numero
                        </label>
                        <input
                            type="number"
                            id="nuevoElemento"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Ingresar"
                            required
                        />




<label htmlFor="nuevoElemento" className="block mb-2 text-sm font-medium text-gray-900">
                            Orden realizada
                        </label>
                        <input
                            type="text"
                            id="nuevoElemento"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Ingresar"
                            required
                        />

<label htmlFor="nuevoElemento" className="block mb-2 text-sm font-medium text-gray-900">
                            Tipo de orden
                        </label>
                        <input
                            type="text"
                            id="nuevoElemento"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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

export default ModalClient;
