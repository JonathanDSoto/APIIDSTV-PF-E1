import React, {useEffect, useState} from "react";
import axios from "axios";
import Layout from "../layouts/Layout";
import NavbarClient from "../components/NavbarClient";
import { useParams, useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8000/api/clientes/";

const EditarCliente = ({}) => {

    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState(0);
    const [correo, setCorreo] = useState("");
    const { id: clienteId } = useParams();
    const navigate = useNavigate();

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${clienteId}`, { nombre: nombre, telefono: telefono, email: correo });
        navigate("/clientes");
    }

    useEffect(() => {
        const getClient = async () => {
            const response = await axios.get(`${endpoint}${clienteId}`);
            setNombre(response.data.data.nombre);
            setTelefono(response.data.data.telefono);
            setCorreo(response.data.data.email);
        };
        getClient();
    } ,[clienteId]);


    return (
        <Layout>
             <NavbarClient
                    section="Modulo de clientes"
                    addBtn="Agregar producto"
                />
          <div className="fixed inset-0 z-50 overflow-y-scroll bg-black bg-opacity-50 flex">
             <div className="relative p-8 rounded-2xl bg-white w-full max-w-md m-auto flex-col flex">
                 <button
                     className="absolute font-semibold text-xl top-0 right-1 p-4 text-black"
                     onClick={() => navigate("/clientes")}
                 >
                     X
                 </button>
                 <div>
                     <h2 className="text-center mb-5">Editar Cliente</h2>
                     <form onSubmit={update}>
                         <label
                             htmlFor="nombre"
                             className="block mb-2 text-sm font-medium text-gray-900"
                         >
                             Nombre:
                         </label>
                         <input
                             value={nombre}
                             onChange={(e) => setNombre(e.target.value)}
                             type="text"
                             id="nombre"
                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                             placeholder="Ingresar"
                             required
                         />
 
                         <label
                             htmlFor="telefono"
                             className="block mb-2 text-sm font-medium text-gray-900"
                         >
                             Teléfono:
                         </label>
                         <input
                             value={telefono}
                             onChange={(e) => setTelefono(e.target.value)}
                             type="number"
                             id="telefono"
                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                             placeholder="Ingresar"
                             required
                         />
 
                         <label
                             htmlFor="email"
                             className="block mb-2 text-sm font-medium text-gray-900"
                         >
                             Correo Electrónico:
                         </label>
                         <input
                             value={correo}
                             onChange={(e) => setCorreo(e.target.value)}
                             type="text"
                             id="email"
                             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                             placeholder="Ingresar"
                             required
                         />
                         <div className="flex justify-center mt-4">
                             <button
                                 type="button"
                                 className="btn rounded-md border hover:bg-red-700 border-red-700 bg-red-500 text-white py-1 px-3 mr-2"
                                 onClick={() => navigate("/clientes")}
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
        </Layout>
     );
};

export default EditarCliente;
