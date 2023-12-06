import React, { useState } from "react";

export default function Card({
    name,
    comidas,
    price,
    conxt,
}) {
    return (
        <div className="bg-[#333333] shadow-md rounded-2xl mb-8 p-4 flex ">
            <div className="flex items-center flex-col">
                <img
                    src={comidas}
                    alt="comidas"
                    className="w-40 h-40 rounded-full mb-4"
                />
                <div className="flex-grow">
                    <h2 style={{ fontSize: "1.3rem", whiteSpace: "wrap", maxWidth: "250px", maxHeight: "150px", overflow: "hidden", textOverflow: "ellipsis" }}  className="font-bold text-white overflow-clip" title={name}>
                        {name}
                    </h2>

                    <div className="lg:flex items-center">
                        <p
                            style={{ fontSize: "1.2rem" }}
                            className='text-yellow-500 text-2xl font-bold'
                        >
                            ${price}
                        </p>
                    </div>
                    <div style={{ fontSize: "1rem", whiteSpace: "wrap", maxWidth: "250px", maxHeight: "30px", overflow: "hidden", textOverflow: "ellipsis" }} className="text-xs text-slate-300 font-light">
                        {conxt}
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
