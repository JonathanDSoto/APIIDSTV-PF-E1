import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Layout from "../layouts/Layout";
import axios from "axios";

export default function Platillos() {
    const [platillo, setPlatillo] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/platillos")
            .then((response) => {
                setPlatillo(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
            
    }, []);

    return (
        <Layout>
            <div className="overflow-y-scroll h-screen">
                <Navbar section="Modulo de platillos" addBtn="Agregar" />
                <main className="mt-10 md:flex md:flex-wrap md:justify-center gap-8 -mb-28">
                    {platillo &&
                        platillo.map((platillo) => (
                            <Card
                                key={platillo.id}
                                name={platillo.nombre}
                                comidas={platillo.imagen_path}
                                price={platillo.precio}
                                conxt={platillo.descripcion}
                            />
                        ))}
                </main>
            </div>
        </Layout>
    );
}
