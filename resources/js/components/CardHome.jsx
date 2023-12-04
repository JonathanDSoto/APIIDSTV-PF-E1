import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardHome({
    name,
    comidas,
    description,
    conxt,
    conxt2,
    index = 1,
    ruta
}) {
    const cardColors = ["bg-red-500", "bg-green-500", "bg-yellow-500"];
    const cardIndex = index;
    const cardColorClass = cardColors[cardIndex % cardColors.length];
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`${ruta}`)} className={`${cardColorClass} shadow-md cursor-pointer rounded-2xl mx-4 p-8`}>
            <div className="flex items-center flex-col">
                <img
                    src={comidas}
                    alt="Sushi de Pollo"
                    className="w-full max-h-60 object-cover rounded-2xl"
                />
                <div className=" mt-3 text-center">
                    <h2 style={{ fontSize: "3.0rem" }} className="font-black">
                        {name}
                    </h2>
                    <div className="lg:flex items-center">
                        <a
                            style={{ fontSize: "1.4rem" }}
                            className="text-md text-black font-medium"
                        >
                            {description}
                        </a>
                    </div>

                    <div className="text-md text-black font-medium">
                        {conxt}
                    </div>
                    <div className="text-md text-black font-medium">
                        {conxt2}
                    </div>
                </div>
            </div>
        </div>
    );
}
