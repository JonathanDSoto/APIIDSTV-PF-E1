import React from "react";
import Layout from "../layouts/Layout";
import NavbarInv from "../components/NabvarInv";
import AgregarModal from "../components/ModalInv";
import Swal from "sweetalert2";
import useFetch from "../hooks/useFetch";
import deleteData from "../hooks/DeleteButton";
import { useState, useEffect } from "react";

export default function Inventario() {

    const [cantidadMinima, setCantidadMinima] = useState(37);

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        useFetch("inventarios").then((data) => setProductos(data));
    }, []);

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
                <NavbarInv
                    section="Modulo de inventario"
                    addBtn="Agregar producto"
                />
                <main className="h-screen mt-10 grid grid-cols-1 md:flex md:flex-wrap md:justify-center  -mb-28">
                    <div className="relative overflow-x-auto mt-20">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center"
                                    >
                                        Producto
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center"
                                    >
                                        Cantidad
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center"
                                    >
                                        Tipo
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center"
                                    >
                                        Cantidad mínima
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center"
                                    >
                                        Estado
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
                              { productos.map((producto, id) => (

                                <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        <div className="flex items-center">
                                            {producto.nombre}
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">{producto.cantidad} {producto.unidad_medida}</td>
                                    <td className="px-6 py-4">{producto.tipo}</td>
                                    <td className="px-6 py-4">{cantidadMinima} {producto.unidad_medida}</td>
                                    <td className="px-6 py-4">
                                        {
                                            producto.cantidad < cantidadMinima ? (
                                                <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-red-100">
                                                    Agotado
                                                </span>
                                            ) : (
                                                <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                                    Disponible
                                                </span>
                                            )
                                        }
                                    </td>
                                    <td className="px-6 py-4">
                                    <button
                                                className="rounded-md font-bold border hover:bg-yellow-700 border-yellow-700 bg-yellow-500 text-white py-1 px-3 mr-2"
                                                onClick={openAgregarModal}
                                            >
                                                Editar
                                            </button>
                                            <button
                                                className="rounded-md font-bold border hover:bg-red-700 border-red-700 bg-red-500 text-white py-1 px-3 mr-2"
                                                onClick={() =>
                                                    Swal.fire({
                                                        title:
                                                            "¿Estás seguro?",
                                                        text:
                                                            "No podrás revertir esto",
                                                        icon: "warning",
                                                        showCancelButton: true,
                                                        confirmButtonColor:
                                                            "#3085d6",
                                                        cancelButtonColor:
                                                            "#d33",
                                                        confirmButtonText:
                                                            "Sí, eliminar",
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            Swal.fire(
                                                                "Eliminado",
                                                                "El registro ha sido eliminado",
                                                                "success"
                                                            );
                                                        }
                                                    })
                                                }
                                            >
                                                Eliminar
                                            </button>
                                    </td>
                                </tr>
                              ))}
                            </tbody>
                        </table>
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
