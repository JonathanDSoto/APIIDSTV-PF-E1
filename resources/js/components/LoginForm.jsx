import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/users?email=${email}`);
        const data = await response.json();

        if (data.data && data.data.length > 0) {
          setEmail(data.data[1].email);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [email]); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    
      const fixedPassword = 'admin';
      const user = { email }; 
      if (user && validatePassword(password)) {
        setIsLoggedIn(true);
        navigate('/inicio');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const validatePassword = (inputPassword) => {
    const fixedPassword = 'admin';
    return inputPassword === fixedPassword;
  };

  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="fromGroup">
          <label className="block capitalize form-label">Correo electrónico</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              className="form-control py-2"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="fromGroup">
          <label className="block capitalize form-label">Contraseña</label>
          <div className="relative">
            <input
              type="password"
              name="password"
              className="form-control py-2"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex justify-between"></div>
        <button type="submit" className="btn btn-dark block w-full text-center">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}

export default LoginForm;





// import React from 'react'
// import { NavLink } from 'react-router-dom'

// function LoginForm() {
//   return (
//     <div>
//          <form className="space-y-4 " action='index.html'>
//             <div className="fromGroup">
//               <label className="block capitalize form-label">Correo electrónico</label>
//               <div className="relative ">
//                 <input type="email" name="email" className="form-control py-2" placeholder="Ingresa tu correo electrónico"/>
//               </div>
//             </div>
//             <div className="fromGroup">
//               <label className="block capitalize form-label">Contraseña</label>
//               <div className="relative "><input type="password" name="password" className="  form-control py-2" placeholder="Ingresa tu contraseña" />
//               </div>
//             </div>
//             <div className="flex justify-between">

              
//             </div>
//             <NavLink to="/inicio" className="btn btn-dark block w-full text-center">Iniciar Sesión</NavLink>
//           </form>
//     </div>
//   )
// }

// export default LoginForm