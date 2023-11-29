import React from "react";
import Swal from "sweetalert2";

const DeleteItem = ({ endpoint, itemId }) => {
    const confirmDelete = () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción no se puede revertir",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar",
            confirmButtonText: "Eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete();
                Swal.fire(
                    "¡Eliminado!",
                    "El registro ha sido eliminado.",
                    "success"
                );
            }
        });
    };

    const handleDelete = () => {
        fetch(`${endpoint}/${itemId}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                window.location.reload();
            });
    };

    return (
        <button
            className="rounded-md border hover:bg-red-700 border-red-700 bg-red-500 text-white py-1 px-3 mr-2"
            type="button"
            onClick={confirmDelete}
        >
            Eliminar
        </button>
    );
};

export default DeleteItem;
