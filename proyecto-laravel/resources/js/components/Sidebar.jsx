import React from "react";
import { useState } from "react";

function Sidebar() {
    const [open, setOpen] = useState(false);
    const Menus = [
        { title: "Inicio" },
        { title: "Pedidos" },
        { title: "Platillos" },
        { title: "Inventario" },
        { title: "Configuración" },
        { title: "", gap: true },
        { title: 'Cerrar Sesión', logout: true, path: '/Login' },
    ];

    return (
        <div className="flex">
            <div
                className={` ${
                    open ? "w-60" : "w-16"
                } bg-black h-screen p-5 pt-8 top-0 fixed duration-300`}
            >
                <img
                    src="/circulo.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7
                    border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src="/sushi.png"
                        className={`cursor-pointer duration-500 w-3 ${
                            open && "rotate-[360deg]"
                        }`}
                    />
                    <h1
                        className={`text-white origin-left font-black text-xl duration-200 ${
                            !open && "scale-0"
                        }`}
                    >
                        Hirai Sushi Bar
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                    
                        <a
                            key={index}
                            className={`flex rounded-md p-2 cursor-pointer hover:bg-slate-600 text-gray-200 text-md items-center gap-x-4 
                                ${Menu.gap ? "mt-9" : "mt-2"} 
                            ${
                                Menu.logout
                                    ? "hover:bg-red-700 hover:text-white"
                                    : "hover:bg-slate-600 text-gray-300"
                            }
                            `}
                        >
                            <span className={`${!open && "hidden"}`}>
                     {Menu.title}
                     
                     </span>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;