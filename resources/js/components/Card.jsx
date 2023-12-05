import React, { useState } from "react";

export default function Card({
    name,
    comidas,
    price,
    conxt,
    conxt2,
    checkpoint,
}) {
    return (
        <div className="bg-white shadow-md rounded-2xl mb-8 mx-4 p-4 flex ">
            <div className="flex items-center flex-col">
                <img
                    src={comidas}
                    alt="Sushi de Pollo"
                    className="w-full max-h-48 object-cover rounded-2xl"
                />
                <div className="flex-grow">
                    <h2 style={{ fontSize: "2.0rem" }} className="font-medium">
                        {name}
                    </h2>
                    <div className="lg:flex items-center">
                        <button
                            style={{ fontSize: "1.2rem" }}
                            className={`mr-1`}
                        >
                            {checkpoint}
                        </button>
                    </div>

                    <div className="lg:flex items-center">
                        <button
                            style={{ fontSize: "1.2rem" }}
                            className={`mr-1`}
                        >
                            {price}
                        </button>
                    </div>
                    <div className="text-xs text-blue-700 font-medium">
                        {conxt}
                    </div>
                    <div className="text-xs text-black font-medium">
                        {conxt2}
                    </div>
                    
                    <div className="flex justify-center text-md font-semibold mt-10">
                        <button className="rounded-md border hover:bg-green-700 border-green-700 bg-green-500 text-white py-1 px-8 mr-2">
                            Editar
                        </button>

                        <button
                            className="rounded-md border hover:bg-red-700 border-red-700 bg-red-500 text-white py-1 px-8 mr-2"
                            type="button"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
