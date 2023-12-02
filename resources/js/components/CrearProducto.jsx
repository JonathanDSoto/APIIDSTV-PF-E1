import React, {useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const endpoint = "http://localhost:8000/api/inventarios";

const ModalInv = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // States
    const [name, setName] = useState("");
    const [tipoProducto, setTipoProducto] = useState("");
    const [unidadMedida, setUnidadMedida] = useState("");
    const [cantidad, setCantidad] = useState(1);
    const [cantidadMinima, setCantidadMinima] = useState(1);

    // Validation
    const [isNameValid, setIsNameValid] = useState(false);
    const [isCantidadValid, setIsCantidadValid] = useState(true);
    const [isCantidadMinimaValid, setIsCantidadMinimaValid] = useState(true);

    // Focus check
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isCantidadFocused, setIsCantidadFocused] = useState(false);
    const [isCantidadMinimaFocused, setIsCantidadMinimaFocused] = useState(false);

    //List of regex
    const RegexName = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s-]+$/;
    const RegexPositiveNumber = /^[1-9]+[0-9]*$/;

    // Functions
	function onSetName(value) {
        setName(value);
        setIsNameValid(RegexName.test(value) && value.length > 0);       
    }

    function onSetCantidad(value) {
        setCantidad(value);
        setIsCantidadValid(value > 0);       
    }

    function onSetCantidadMinima(value) {
        setCantidadMinima(value);
        setIsCantidadMinimaValid(value > 0);       
    }


    const create = async (e) => {
        e.preventDefault();
    
        console.log("Sending data:", { nombre: name, tipo: tipoProducto, unidad_medida: unidadMedida, cantidad: cantidad, cantidad_minima: cantidadMinima});
        
        try {
            await axios.post(endpoint, { nombre: name, tipo: tipoProducto, unidad_medida: unidadMedida, cantidad: cantidad, cantidad_minima: cantidadMinima});
            onClose();
            window.location.reload();
        } catch (error) {
            console.error("Error:", error);
    
            // alert
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Verifique que la entrada sea única y los datos sean correctos.',
            });
        }
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

                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                            Nombre del Producto
                        </label>
                        <input
                            value={name}
                            onChange={(e) => onSetName(e.target.value)}
                            onFocus={() => setIsNameFocused(true)}
                            type="text"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                            placeholder="Ingresar"
                            required
                        />
                        {isNameValid || !isNameFocused  ? null : (
                        <div className="text-red-500 text-sm mt-1 mb-2">
                            Ingrese nombre de producto válido y con mayor a 3 caracteres.
                            </div>
                            )}

                        <div className="col-span-2 sm:col-span-1">
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Tipo de Producto</label>
                            <select
                                value={tipoProducto}
                                onChange={(e) => setTipoProducto(e.target.value)}
                                id="category" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-2"
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
                            <label htmlFor="unidad" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Unidad de Medida</label>
                            <select
                                value={unidadMedida}
                                onChange={(e) => setUnidadMedida(e.target.value)} 
                                id="unidad" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-2"
                             >
                                <option className='text-black'>Seleccionar</option>
                                <option className='text-black' value="Kilogramos">Kilogramos</option>
                                <option className='text-black' value="Litros">Litros</option>
                                <option className='text-black' value="Gramos">Gramos</option>

                            </select>
                        </div>

                        <label htmlFor="cantidad" className="block mb-2 text-sm font-medium text-gray-900">
                            Cantidad
                        </label>
                        <input
                            value={cantidad}
                            onChange={(e) => onSetCantidad(e.target.value)}
                            onFocus={() => setIsCantidadFocused(true)}
                            type="number"
                            id="cantidad"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                            placeholder="Ingresar"
                            required
                        />
                        {isCantidadValid || !isCantidadFocused ? null : (
                        <div className="text-red-500 text-sm mt-1 mb-2">
                            Ingrese número mayor a 0
                            </div>
                            )}

                        <label htmlFor="cantidadMinima" className="block mb-2 text-sm font-medium text-gray-900">
                            Cantidad minima
                        </label>
                        <input
                            value={cantidadMinima}
                            onChange={(e) => onSetCantidadMinima(e.target.value)}
                            onFocus={() => setIsCantidadMinimaFocused(true)}
                            type="number"
                            id="cantidadMinima"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Ingresar"
                            required
                        />
                        {isCantidadMinimaValid || !isCantidadMinimaFocused  ? null : (
                        <div className="text-red-500 text-sm mt-1 mb-2">
                            Ingrese número mayor a 0
                            </div>
                            )}

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