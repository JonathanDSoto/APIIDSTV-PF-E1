import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Layout from "../layouts/Layout";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import deleteData from "../hooks/DeleteButton";
import Swal from "sweetalert2";

export default function Platillos() {
    const [platillo, setPlatillo] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/platillos")
            .then((response) => {
                setPlatillo(response.data.data);
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Algo salio mal",
                });
            });
    }, []);

    const deletePlatillo = async (id) => {
        try {
            await deleteData("platillos", id);
            const platillosData = await useFetch("platillos");

            setPlatillo(platillosData);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo salio mal",
            });
        }
    };

    return (
        <Layout>
            <div className="overflow-y-scroll h-screen">
                <Navbar
                    section="Modulo de platillos"
                    addBtn="Agregar Platillo"
                />
                <main className="mt-10 md:flex justify-center md:flex-wrap gap-9 -mb-28">
                    {platillo.map((platillo) => (
                    <div className="bg-[#333333] shadow-md max-h-[450px] rounded-2xl mb-2 p-4 flex ">
                        <div className="flex items-center flex-col">
                            <img
                                src={platillo.imagen_path}
                                alt="comidas"
                                className="w-40 h-40 rounded-full mb-4"
                            />
                            <div className="h-40">
                                <h2
                                    style={{
                                        fontSize: "1.3rem",
                                        whiteSpace: "wrap",
                                        maxWidth: "250px",
                                        maxHeight: "150px",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                    }}
                                    className="font-bold text-white overflow-clip"
                                    title={name}
                                >
                                    {platillo.nombre}
                                </h2>

                                <div className="lg:flex items-center">
                                    <p
                                        style={{ fontSize: "1.2rem" }}
                                        className="text-yellow-500 text-2xl font-bold"
                                    >
                                        ${platillo.precio}
                                    </p>
                                </div>
                                <div
                                    style={{
                                        fontSize: "1rem",
                                        whiteSpace: "wrap",
                                        maxWidth: "250px",
                                        overflow: "clip",
                                        textOverflow: "ellipsis",
                                    }}
                                    className="text-xs text-slate-300 h-9 font-light"
                                >
                                    {platillo.descripcion}
                                </div>
                                <div className="flex justify-center text-md font-semibold mt-10">
                                    <button className="rounded-md border hover:bg-green-700 border-green-700 bg-green-500 text-white py-1 px-8 mr-2">
                                        Editar
                                    </button>

                                    <button
                                        className="rounded-md border hover:bg-red-700 border-red-700 bg-red-500 text-white py-1 px-8 mr-2"
                                        type="button"
                                        onClick={() => {
                                            Swal.fire({
                                                title: "¿Estas seguro?",
                                                text:
                                                    "No podras revertir esta acción",
                                                icon: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor:
                                                    "#3085d6",
                                                cancelButtonColor:
                                                    "#d33",
                                                confirmButtonText:
                                                    "Si, eliminar",
                                                cancelButtonText:
                                                    "Cancelar",
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    deletePlatillo(
                                                        platillo.id
                                                    );
                                                    Swal.fire(
                                                        "Eliminado",
                                                        "El platillo ha sido eliminado",
                                                        "success"
                                                    );
                                                }
                                            });
                                        }}

                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </main>
            </div>
        </Layout>
    );
}
