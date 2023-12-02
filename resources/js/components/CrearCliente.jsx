import React, {useState} from "react";
import axios from "axios";
import Swal from 'sweetalert2';

const endpoint = "http://localhost:8000/api/clientes";

const CrearCliente = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // States
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState("");

    //  Validation  
    const [isNameValid, setisNameValid] = useState(false);
    const [isPhoneValid, setisPhoneValid] = useState(false);
    const [isEmailValid, setisEmailValid] = useState(false);

    // Focus check
    const [isNameFocused, setIsNameFocused] = useState(false);
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);
    const [isEmailFocused, setIsEmailFocused] = useState(false);

    //List of regex
    const RegexName = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s-]+$/;
    const RegexPhone = /^[1-9]+[0-9]*$/;
    const RegexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    // Functions
	function onSetName(value) {
        setName(value);
        setisNameValid(RegexName.test(value) && value.length > 0);       
    }

    function onSetPhone(value) {
        setPhone(value);
        setisPhoneValid(RegexPhone.test(value) && value.length > 0);   
    }

    function onSetEmail(value) {
        setEmail(value);
        setisEmailValid(RegexEmail.test(value) && value.length > 0);   
    }

    const create = async (e) => {
        e.preventDefault();

        console.log("Sending data:", { nombre: name, telefono: phone, email: email });

    try{
        await axios.post(endpoint, { nombre: name, telefono: phone, email: email });
        onClose();
        window.location.reload();
    } catch (error) {
        console.error("Error:", error);

        // alert
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Verifique que la entrada sea única y los datos sean correctos.',
        });
    }
}

    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
            <div className="relative p-8 rounded-2xl bg-white w-full max-w-md m-auto flex-col flex">
                <button
                    className="absolute font-semibold text-xl top-0 right-1 p-4 text-black"
                    onClick={onClose}
                >
                    X
                </button>
                <div>
                    <h2 className="text-center mb-5">Crear Cliente</h2>
                    <form onSubmit={create}>
                        {/*NAME*/}
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Nombre:
                        </label>
                        <input
                            value={name}
                            onChange={(e) => onSetName(e.target.value)}
                            onFocus={() => setIsNameFocused(true)}
                            type="text"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Ingresar nombre"
                            required
                        />
                        {isNameValid || !isNameFocused  ? null : (
                        <div className="text-red-500 text-sm mt-1 mb-2">
                            Ingrese nombre válido
                            </div>
                            )}
                        {/*PHONE*/}
                        <label
                            htmlFor="phone"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Teléfono:
                        </label>
                        <input
                            value={phone}
                            onChange={(e) => onSetPhone(e.target.value)}
                            onFocus={() => setIsPhoneFocused(true)}
                            type="number"
                            id="phone"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Ingresar teléfono (10 dígitos)"
                            required
                        />
                        {isPhoneValid || !isPhoneFocused  ? null : (
                        <div className="text-red-500 text-sm mt-1 mb-2">
                            Ingrese teléfono válido (10 dígitos)
                            </div>
                            )}             
                        {/*EMAIL*/}
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Correo Electrónico:
                        </label>
                        <input
                            value={email}
                            onChange={(e) => onSetEmail(e.target.value)}
                            onFocus={() => setIsEmailFocused(true)}
                            type="text"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Ingresar correo"
                            required
                        />
                        {isEmailValid || !isEmailFocused  ? null : (
                        <div className="text-red-500 text-sm mt-1 mb-2">
                            Ingrese correo válido
                            </div>
                            )} 

                        <div className="flex justify-center mt-4">
                            <button
                                type="button"
                                className="btn rounded-md border hover:bg-red-700 border-red-700 bg-red-500 text-white py-1 px-3 mr-2"
                                onClick={onClose} // onClose para cerrar modal?
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CrearCliente;
