import React, { useEffect, useState } from "react";
import axios from "axios";

const ModalPlatillo = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(null);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [ingredientQuantities, setIngredientQuantities] = useState({});
    const [listaDeIngredientes, setListaDeIngredientes] = useState([]);

    const handleQuantityChange = (ingredientId, quantity) => {
        setIngredientQuantities((prevQuantities) => ({
            ...prevQuantities,
            [ingredientId]: quantity,
        }));
    };

    useEffect(() => {
        axios.get("http://localhost:8000/api/inventarios").then((response) => {
            setListaDeIngredientes(response.data.data);
            console.log(response.data.data);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("imagen_path", image);
        formData.append("nombre", name);
        formData.append("descripcion", description);
        formData.append("precio", price);
        formData.append(
            "ingredientes",
            JSON.stringify(
                selectedIngredients.map((ingredientId) => ({
                    id: ingredientId,
                    cantidad:
                        ingredientQuantities[ingredientId] ||
                        listaDeIngredientes.find(
                            (ingrediente) => ingrediente.id === ingredientId
                        ).cantidad,
                }))
            )
        );

        axios
            .post("http://localhost:8000/api/platillos", formData)
            .then((response) => {
                console.log(response.data);
                onClose();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
            <form
                onSubmit={handleSubmit}
                className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex"
            >
                <button
                    className="absolute top-0 right-0 p-4"
                    onClick={onClose}
                >
                    <span className="text-xl">×</span>
                </button>
                <div>
                    <h2 className="text-center mb-5">Crear Platillo</h2>
                    <div>
                        <label
                            htmlFor="nuevoElemento"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Nombre del platillo
                        </label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            id="nuevoElemento"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                            placeholder="Ingresar"
                            required
                        />
                        <label
                            htmlFor="nuevoElemento"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Precio
                        </label>
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="number"
                            id="nuevoElemento"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                            placeholder="Ingresar precio"
                            required
                        />
                        <label
                            htmlFor=""
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Descripción
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            type="text"
                            id="nuevoElemento"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                            placeholder="Ingrese una breve descripcion del platillo"
                            required
                        />
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Ingredientes
                        </label>
                        <div className="grid grid-cols-2 gap-x-3">
                            {listaDeIngredientes.map((ingrediente) => (
                                <div key={ingrediente.id} className="mb-2">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedIngredients.includes(
                                                ingrediente.id
                                            )}
                                            onChange={(e) => {
                                                const isChecked =
                                                    e.target.checked;
                                                setSelectedIngredients(
                                                    (prevSelected) =>
                                                        isChecked
                                                            ? [
                                                                  ...prevSelected,
                                                                  ingrediente.id,
                                                              ]
                                                            : prevSelected.filter(
                                                                  (id) =>
                                                                      id !==
                                                                      ingrediente.id
                                                              )
                                                );
                                            }}
                                            className="mr-2"
                                        />
                                        {ingrediente.nombre}
                                    </label>
                                    {selectedIngredients.includes(
                                        ingrediente.id
                                    ) && (
                                        <input
                                            type="number"
                                            value={
                                                ingredientQuantities[
                                                    ingrediente.id
                                                ] || 1
                                            }
                                            onChange={(e) =>
                                                handleQuantityChange(
                                                    ingrediente.id,
                                                    parseInt(e.target.value, 10)
                                                )
                                            }
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="Cantidad"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <label
                            htmlFor="nuevoElemento"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Imagen
                        </label>
                        <input
                            onChange={(e) => setImage(e.target.files[0])}
                            type="file"
                            name="imagen_path"
                            id="imagen"
                            accept="image/png, image/jpeg"
                            required
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                        />
                        <div className="flex justify-center mt-4">
                            <button
                                type="button"
                                className="btn rounded-md border hover:bg-red-700 border-red-700 bg-red-500 text-white py-1 px-3 mr-2"
                                onClick={onClose}
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
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ModalPlatillo;
