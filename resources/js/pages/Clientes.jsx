import React from 'react';
import Layout from '../layouts/Layout';
import AgregarModal from '../components/ModalClient'
import NavbarClient from '../components/NavbarClient';
import { useEffect,useState } from 'react';


export default function Clientes() {


 
  

  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    // Utilizar SweetAlert2 para mostrar un mensaje
    Swal.fire({
      title: 'Este orden ya esta marcada',
      icon: 'success',
      showConfirmButton: false,
      timer: 2000 
    });
  };

  useEffect(() => {
    let timeout;
    if (showAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false);
      }, 2000); 
    }


    return () => {
      clearTimeout(timeout);
    };
  }, [showAlert]);


  const handleEdit = () => {
    // Lógica para editar
  };

  const handleDelete = () => {
    // Lógica para eliminar
  };




  useEffect(() => {
    let timeout;
    if (showAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false);
      }, 2000); 
    }


  return () => {
    clearTimeout(timeout);
  };
}, [showAlert]);

const [agregarModalOpen, setAgregarModalOpen] = useState(false);

const openAgregarModal = () => {
  setAgregarModalOpen(true);
};

const closeAgregarModal = () => {
  setAgregarModalOpen(false);
};
  return (
    <Layout>
      <div className='overflow-scroll'>

        <NavbarClient section="Modulo de clientes" addBtn="Agregar producto" />
        <main className='h-screen mt-10 grid grid-cols-1 md:flex md:flex-wrap md:justify-center  -mb-28'>
         

    <div className="relative overflow-x-auto mt-20">
    <table className="-z-50 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3 text-center">
            Cliente
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Orden
          </th>

          <th scope="col" className="px-6 py-3 text-center">
            Numero
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Fecha
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Tipo de orden
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Estado 
          </th>



          <th scope="col" className="px-6 py-3 text-center">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div className="flex items-center">
            <img
                  className="w-10 h-10 object-cover rounded-full mr-4"
                  src="ft.jpg"
                  alt="Cliente Avatar"
                />



              s
            </div>
          </th>
          <td className="px-6 py-4">s</td>
          <td className="px-6 py-4">s</td>
          <td className="px-6 py-4">s</td>
          <td className="px-6 py-4">s</td>
          <td className="lg:flex items-center">
            <button style={{ fontSize: '1.2rem' }} className={`mr-1 mt-6 `}>
              s
            </button>
          </td>
          <td className="px-6 py-4">
          <button
              className="rounded-md border hover:bg-green-700 border-green-700 bg-green-500 text-white py-1 px-3 mr-2"
              onClick={openAgregarModal}
            >
              Editar
            </button>

            

            <button
  className="rounded-md border hover:bg-red-700 border-red-700 bg-red-500 text-white py-1 px-3 mr-2"
  type="button"
  onClick={() => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false
    });
    

    const swalWithColorText = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success  text-black',
        cancelButton: 'btn btn-danger text-black',
        content: 'text-blue-500',
        title: 'text-black', 
        footer: 'text-red-500'
      },
      buttonsStyling: false
    });
    
    swalWithColorText.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: '¡Eliminado!',
            text: 'Este modulo ha sido eliminado.',
            icon: 'success'
          });
         
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelado',
            text: 'Modulo a salvo',
            icon: 'error'
          });
         
        }
      });
  }}
>
  Eliminar
</button>


          </td>
        </tr>
      </tbody>
    </table>
    <AgregarModal isOpen={agregarModalOpen} onClose={closeAgregarModal} />
  </div>
          
          
         

        </main>
      </div>
    </Layout>
  );
}