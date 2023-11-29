import React from "react";

const ModalClient = ({ isOpen, onClose }) => {
    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
            <div className="relative p-8 rounded-2xl bg-white w-full max-w-md m-auto flex-col flex">
                <button
                    className="absolute font-semibold text-xl top-0 right-1 p-4 text-black"
                    onClick={onClose}
                >
                    X
                </button>
                <div>
                    <h2 className="text-center mb-5">Registros</h2>
                    <div>
                        <label
                            htmlFor="nuevoElemento"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Nombre:
                        </label>
                        <input
                            type="text"
                            id="nuevoElemento"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Ingresar"
                            required
                        />

                        <label
                            htmlFor="nuevoElemento"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Teléfono:
                        </label>
                        <input
                            type="number"
                            id="nuevoElemento"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Ingresar"
                            required
                        />

                        <label
                            htmlFor="nuevoElemento"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Correo Electrónico:
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
