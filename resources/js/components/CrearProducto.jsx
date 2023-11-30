import React, {useState} from 'react';
import axios from 'axios';


const endpoint = "http://localhost:8000/api/inventarios";

const ModalInv = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [name, setName] = useState("");
    const [tipoProducto, setTipoProducto] = useState("");
    const [unidadMedida, setUnidadMedida] = useState("");
    const [cantidad, setCantidad] = useState(0);

    const create = async (e) => {
        e.preventDefault();

        console.log("Sending data:", { nombre: name, tipo: tipoProducto, unidad_medida: unidadMedida, cantidad: cantidad});

        await axios.post(endpoint, { nombre: name, tipo: tipoProducto, unidad_medida: unidadMedida, cantidad: cantidad});
        onClose();
        window.location.reload();
    }

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
            <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex">
                <button className="absolute top-0 right-0 p-4" onClick={onClose}>
                    <span className="text-xl">×</span>
                </button>
                <form onSubmit={create}>
                    <h2 className='text-center mb-5'>Productos</h2>
                    <div>

                        <label htmlFor="nuevoElemento" className="block mb-2 text-sm font-medium text-gray-900">
                            Nombre del Producto
                        </label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            id="nuevoElemento"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Ingresar"
                            required
                        />

                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Tipo de Producto</label>
                            <select
                                value={tipoProducto}
                                onChange={(e) => setTipoProducto(e.target.value)}
                                id="category" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                             >
                                <option className='text-black'>Seleccionar</option>
                                <option className='text-black' value="Carne">Carne</option>
                                <option className='text-black' value="Crustáceo">Crustáceo</option>
                                <option className='text-black' value="Condimiento">Condimiento</option>
                                <option className='text-black' value="Verdura">Verdura</option>
                                <option className='text-black' value="Lacteo">Lacteo</option>
                                <option className='text-black' value="Fruta">Fruta</option>
                                <option className='text-black' value="Bebida">Bebida</option>
                                <option className='text-black' value="Grano">Grano</option>

                            </select>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Unidad de Medida</label>
                            <select
                                value={unidadMedida}
                                onChange={(e) => setUnidadMedida(e.target.value)} 
                                id="category" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                             >
                                <option className='text-black'>Seleccionar</option>
                                <option className='text-black' value="Kilogramos">Kilogramos</option>
                                <option className='text-black' value="Litros">Litros</option>
                                <option className='text-black' value="Gramos">Gramos</option>

                            </select>
                        </div>

                        <label htmlFor="nuevoElemento" className="block mb-2 text-sm font-medium text-gray-900">
                            Cantidad
                        </label>
                        <input
                            value={cantidad}
                            onChange={(e) => setCantidad(e.target.value)}
                            type="number"
                            id="nuevoElemento"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Ingresar"
                            required
                        />

                        <label htmlFor="nuevoElemento" className="block mb-2 text-sm font-medium text-gray-900">
                            Cantidad minima
                        </label>
                        <input
                            type="number"
                            id="nuevoElemento"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Ingresar"
                            required
                        />

                        <div className="flex justify-center mt-4">
                            <button
                                type="button"
                                className="btn rounded-md border hover:bg-red-700 border-red-700 bg-red-500 text-white py-1 px-3 mr-2"
                                onClick={onClose}
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
                </form>
            </div>
        </div>
    );
};

export default ModalInv;