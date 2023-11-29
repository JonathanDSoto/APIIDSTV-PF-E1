import React, {useEffect, useState} from "react";
import axios from "axios";

const ModalClient = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [id, setId] = useState(1);
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState(0);
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");


    const update = async (e) => {
        e.preventDefault();

        await axios.put(`http://localhost:8000/api/clientes/${id}`, { nombre: nombre, telefono: telefono, email: correo, password: password });
        onClose();
        window.location.reload();
    }

    useEffect(() => {
        const getClientById = async () => {
            const response = await axios.get(`http://localhost:8000/api/clientes/${id}`);
            const { data } = response;
            setNombre(data.data.nombre);
            setTelefono(data.data.telefono);
            setCorreo(data.data.email);
            setPassword(data.data.password);
        }
        getClientById();
            
    }, []);

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
                    <h2 className="text-center mb-5">Editar Cliente</h2>
                    <form onSubmit={update}>
                        <label
                            htmlFor="nuevoElemento"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Nombre:
                        </label>
                        <input
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
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
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
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
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
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
                            Contra:
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalClient;
