import React from 'react'
import { NavLink } from 'react-router-dom'

function LoginForm() {
  return (
    <div>
         <form className="space-y-4" action='index.html'>
            <div className="fromGroup">
              <label className="block capitalize form-label">Correo electrónico</label>
              <div className="relative ">
                <input type="email" name="email" className="form-control py-2" placeholder="Ingresa tu correo electrónico"/>
              </div>
            </div>
            <div className="fromGroup">
              <label className="block capitalize form-label">Contraseña</label>
              <div className="relative "><input type="password" name="password" className="  form-control py-2" placeholder="Ingresa tu contraseña" />
              </div>
            </div>
            <div className="flex justify-between">

              
            </div>
            <NavLink to="/inicio" className="btn btn-dark block w-full text-center">Iniciar Sesión</NavLink>
          </form>
    </div>
  )
}

export default LoginForm