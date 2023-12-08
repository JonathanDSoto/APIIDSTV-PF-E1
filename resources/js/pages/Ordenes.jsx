import React,{useState, useEffect} from "react";
import Layout from "../layouts/Layout";
import NavbarOrder from "../components/NavbarOrder";
import axios from "axios";

const endpoint = "http://localhost:8000/api/ordenesPlatillos";

export default function Ordenes() {

    const [ordenes, setOrdenes] = useState([]);

    useEffect(() => {
        axios
            .get(endpoint)
            .then((response) => {
                setOrdenes(response.data.data);
            })
            .catch((error) => {
                console.log("Salió error:", error);
            });
    }, []);

    
    return (
        <Layout>
            <div className="overflow-y-scroll h-screen">
                <NavbarOrder section="Ordenes" addBtn="Agregar Orden" />
                <main className="mt-10 md:flex mx-4 justify-center md:flex-wrap gap-9 -mb-28">
                    {ordenes.map((orden) => (
                <div key={orden.id} className="bg-[#333333] shadow-md max-h-[350px] rounded-2xl mb-2 p-4 flex ">
                        <div className="flex items-center flex-col  overflow-clip">
                            <div className="flex-grow">
                                <h2
                                    style={{ fontSize: "1.5rem" }}
                                    className=" text-white font-black"
                                >
                                    Martin Castro
                                </h2>
                                <div className="lg:flex items-center text-slate-400">
                                    <p style={{ fontSize: "1.2rem" }}>
                                        Domicilio: Calle 1 # 1-1
                                    </p>
                                </div>
                                <div className="overflow-clip">
                                    <ul className="text-white font-mono grid justify-center grid-cols-2 ">
                                        <li>
                                            <p>- Platillo 1</p>
                                        </li>
                                        <li>
                                            <p>- Platillo 2</p>
                                        </li>
                                        <li>
                                            <p>- Platillo 3</p>
                                        </li>
                                        <li>
                                            <p>- Platillo 1</p>
                                        </li>
                                        <li>
                                            <p>- Platillo 2</p>
                                        </li>
                                        <li>
                                            <p>- Platillo 3</p>
                                        </li>
                                        <li>
                                            <p>- Platillo 1</p>
                                        </li>
                                        <li>
                                            <p>- Platillo 2</p>
                                        </li>
                                        <li>
                                            <p>- Platillo 3</p>
                                        </li>
                                        <li>
                                            <p>- Platillo 1</p>
                                        </li>
                                        <li>
                                            <p>- Platillo 2</p>
                                        </li>
                                        <li>
                                            <p>- Platillo 3</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex justify-end text-yellow-500 text-2xl font-bold">
                                    <p style={{ fontSize: "1.2rem" }}>
                                        $234.50
                                    </p>
                                </div>

                                <div className="flex justify-center mt-4 space-x-3 text-md font-semibold">
                                    <button
                                        className="rounded-md border hover:bg-green-700 border-green-700 bg-green-500 text-white py-1 px-8"
                                    >
                                        Editar
                                    </button>

                                    <button
                                        className="rounded-md border hover:bg-red-700 border-red-700 bg-red-500 text-white py-1 px-8"
                                        type="button"
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
