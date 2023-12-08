import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

const ModalPlatillo = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // States
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [ingredientQuantities, setIngredientQuantities] = useState({});
    const [listaDeIngredientes, setListaDeIngredientes] = useState([]);

    // Validation
    const [isNameValid, setIsNameValid] = useState(false);
    const [isDescriptionValid, setIsDescriptionValid] = useState(false);
    const [isPriceValid, setIsPriceValid] = useState(false);
    const [isImageValid, setIsImageValid] = useState(false);
    const [isSelectedIngredientsValid, setIsSelectedIngredientsValid] = useState(false);
    const [isIngredientQuantitiesValid, setIsIngredientQuantitiesValid] = useState(false);
    const [isListaDeIngredientesValid, setIsListaDeIngredientesValid] = useState(false);
    const [isSubmitValid, setIsSubmitValid] = useState(false);

    //List of regex
    const RegexName = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s-]+$/;

     // Functions
     // name
     function onSetName(value) {
        setName(value);   
    }
    useEffect(() => {
        setIsNameValid(RegexName.test(name) && name.length >2 && name.length <50);
    }, [name]);

    // description
    function onSetDescription(value) {
        setDescription(value);   
    }
    useEffect(() => {
        setIsDescriptionValid(description.length > 10 && description.length <100);
    }, [description]);

    // price
    function onSetPrice(value) {
        setPrice(value);   
    }
    useEffect(() => {
        setIsPriceValid(price >0);
    }, [price]);

    // selectedingredients
    function onSetSelectedIngredients(value) {
    setSelectedIngredients(value);
    }
    useEffect(() => {
        setIsSelectedIngredientsValid(selectedIngredients.length > 0);
    }, [selectedIngredients]);

    // ingredientquantities
    function onSetIngredientsQuantities(value) {
    setIngredientQuantities(value);
    }
    useEffect(() => {
    const hasValidQuantities = Object.values(ingredientQuantities).some((quantity) => quantity > 0);
    setIsIngredientQuantitiesValid(hasValidQuantities);
    }, [ingredientQuantities]);

    // Submit form btn
    useEffect(() => {
        setIsSubmitValid(
            isNameValid && isDescriptionValid && isPriceValid && isSelectedIngredientsValid 
        );
    }, [isNameValid, isDescriptionValid, isPriceValid, isSelectedIngredientsValid]);



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

    const handleSubmit = async (e) => {
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
        try {
            await axios.post("http://localhost:8000/api/platillos", formData)
                .then((response) => {
                    console.log(response.data);
                    onClose();
                })
                .catch((error) => {
                    console.log(error);
                    
                    // alert
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Verifique que la entrada sea única y los datos sean correctos.',
                    });
                });
        } catch (error) {
            console.error("Error:", error);
        }
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
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Nombre del platillo
                        </label>
                        <input
                            value={name}
                            onChange={(e) =>onSetName(e.target.value)}
                            type="text"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                            placeholder="Ingresar"
                            required
                        />
                        {isNameValid ? null : (
                        <div className="text-red-500 text-sm mt-1 mb-2">
                            Ingrese nombre de 3-50 caracteres y sin números o símbolos, sólo letras, acentos y guiones.
                            </div>
                            )}
                        <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Precio
                        </label>
                        <input
                            value={price}
                            onChange={(e) => onSetPrice(e.target.value)}
                            type="number"
                            id="price"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                            placeholder="Ingresar precio"
                            required
                        />
                        {isPriceValid ? null : (
                        <div className="text-red-500 text-sm mt-1 mb-2">
                            Ingrese número positivo.
                            </div>
                            )}
                        <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Descripción
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => onSetDescription(e.target.value)}
                            type="text"
                            id="description"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
                            placeholder="Ingrese una breve descripcion del platillo"
                            required
                        />
                        {isDescriptionValid ? null : (
                        <div className="text-red-500 text-sm mt-1 mb-2">
                            Ingrese descripción de 10-100 caracteres.
                            </div>
                            )}
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
                                                onSetSelectedIngredients(
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
                                                ] 
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
                        {isSelectedIngredientsValid && isIngredientQuantitiesValid? null : (
                        <div className="text-red-500 text-sm mt-1 mb-2">
                           Cantidad de ingredientes debe ser positiva
                            </div>
                            )}
                        <label
                            htmlFor="imagen"
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
                                className={
                                    isSubmitValid
                                    ? "btn rounded-md border hover:bg-green-700 border-green-700 bg-green-500 text-white py-1 px-3 ml-2"
                                    : "btn rounded-md border hover:bg-gray-700 border-gray-700 bg-gray-500 text-white py-1 px-3 ml-2"
                                }
                                disabled={!isSubmitValid}
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
