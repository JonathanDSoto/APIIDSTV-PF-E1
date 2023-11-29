import React from "react";
import Layout from "../layouts/Layout";
import AgregarModal from "../components/ModalClient";
import NavbarClient from "../components/NavbarClient";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import { useFetch } from "../hooks/useFetch";
import Swal from "sweetalert2";
import DeleteItem from "../hooks/deleteItem";

const apiData = useFetch("http://localhost:8000/api/clientes");

export default function Clientes() {

    const [agregarModalOpen, setAgregarModalOpen] = useState(false);
  
    const openAgregarModal = () => {
      setAgregarModalOpen(true);
    };
  
    const closeAgregarModal = () => {
      setAgregarModalOpen(false);
    };
    return (
        <Layout>
            <div className="overflow-scroll">
                <NavbarClient
                    section="Modulo de clientes"
                    addBtn="Agregar producto"
                />
                <main className="h-screen mt-10 grid grid-cols-1 md:flex md:flex-wrap md:justify-center  -mb-28">
                    <div className="relative overflow-x-auto mt-20">
                        <Suspense fallback={<div>Loading...</div>}>
                            <table className="-z-50 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center"
                                            >
                                                Nombre
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center"
                                            >
                                                Teléfono
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center"
                                            >
                                                Correo Electrónico
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center"
                                            >
                                                Fecha
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center"
                                            >
                                                Acciones
                                            </th>
                                        </tr>
                                    
                                </thead>
                                <tbody>
                                  {apiData.read().data.map((cliente, id) => (
                                    <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {cliente.nombre} {cliente.apellido}
                                        </th>
                                        <td className="px-6 py-4">{cliente.telefono}</td>
                                        <td className="px-6 py-4">{cliente.email}</td>
                                        <td className="px-6 py-4">{cliente.created_at}</td> 
                                        <td className="px-6 py-4">
                                            <button
                                                className="rounded-md border hover:bg-green-700 border-green-700 bg-green-500 text-white py-1 px-3 mr-2"
                                                onClick={openAgregarModal}
                                            >
                                                Editar
                                            </button>

                                           <DeleteItem endpoint="http://localhost:8000/api/clientes" itemId={cliente.id} />
                                        </td>
                                    </tr>
                                  ))}
                                </tbody>
                            </table>
                        </Suspense>
                        <AgregarModal
                            isOpen={agregarModalOpen}
                            onClose={closeAgregarModal}
                        />
                    </div>
                </main>
            </div>
        </Layout>
    );
}
