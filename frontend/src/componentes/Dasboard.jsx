import { useState } from "react";
import {  NavLink } from "react-router-dom";
import Profile from "./Profile";
// import New from "./New";
// import Roles from "./Roles";
// import Enlaces from "./Enlaces";
function Dasboard() {
 
  const [isVisible, setIsVisible] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  // const [datos, setDatos] = useState();
  // const [datosRol, setDatosRol] = useState([]);
  // const [datosEnlaces, setDatosEnlaces] = useState([]);
  // useEffect(() => {
  //   const promesaUsuario = fetch("http://127.0.0.1:8000/api/usuario");
  //   const promesaRol =  fetch("http://127.0.0.1:8000/api/rol");
  //   const promesaEnlaces = fetch("http://127.0.0.1:8000/api/enlaces"); // Agrega esta línea

  //   Promise.all([promesaUsuario,promesaRol, promesaEnlaces]).then(async (values) => {
  //     const usuarioData = await values[0].json();
  //     const rolData = await values[1].json();
  //     const enlacesData = await values[2].json();
  //     if (usuarioData.cod === "404") {
  //       alert(usuarioData.message);
  //     } else {
  //       setDatos(usuarioData);
  //       console.log(usuarioData);
  //     }

  //     if (rolData.cod === "404") {
  //       alert(rolData.message);
  //     } else {
  //       // Almacena los datos de rol en el estado
  //       setDatosRol(rolData);
  //       console.log("Datos de rol:", rolData);
  //     }
  //     if (enlacesData.cod === "404") {
  //       alert(enlacesData.message);
  //     } else {
  //       setDatosEnlaces(enlacesData); // Almacena los datos de enlaces en el estado
  //       console.log("Datos de enlaces:", enlacesData);
  //     }
  //   });
  // }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const toggleProfileVisibility = () => {
    setIsProfileVisible(!isProfileVisible);
  };
  const toggleMenuVisibility = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
    
    
     
        <div className="flex">
          <section
            className={`gradient-bg h-screen w-[20%] flex flex-col items-center gap-16 pt-16 fixed `}
          >
            <div className=" flex flex-col justify-center items-center gap-4">
              <img
                width="80"
                height="80"
                src="https://img.icons8.com/cotton/80/user-male-circle.png"
                alt="user-male-circle"
              />
              <h1 className="text-white text-4xl">Usuario</h1>
            </div>

            <button className=" text-white font-medium"  onClick={toggleMenuVisibility}>General y Seguridad</button>
            {isMenuActive &&
               <ul className="flex flex-col gap-7 text-white">

              <NavLink
                className={({ isActive }) =>
                  isActive ? " border-b-2 border-white " : null
                }
                to="/parametros"
              >
                <li className="flex items-center gap-5 pb-4">
                  <img src="../public/parametros.svg" alt="parametros" />
                  <h2 className="font-medium">Parametros</h2>
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? " border-b-2 border-white " : null
                }
                to="/roles"
              >
                <li className="flex items-center gap-5 pb-4">
                  <img src="../public/roless.svg" alt="" />
                  <h2 className="font-medium">Roles</h2>
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? " border-b-2 border-white " : null
                }
                to="/usuario"
              >
                <li className="flex items-center gap-5 pb-4">
                  <img src="../public/usuarios.svg" alt="usuarios" />
                  <h2 className="font-medium">Usuarios</h2>
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? " border-b-2 border-white " : null
                }
                to="/bitacoras"
              >
                <li className="flex items-center gap-5 pb-4">
                 <img src="../public/bitacora.svg" alt="bitacoras" />
                  <h2 className="font-medium">Bitacoras</h2>
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? " border-b-2 border-white " : null
                }
                to="/enlaces"
              >
                <li className="flex items-center gap-5 pb-4">
                  <img src="../public/enlace.svg" alt="enlace" />
                  <h2 className="font-medium">Enlaces</h2>
                </li>
              </NavLink>

            </ul>
            }
           
          </section>
          <div className="bg-slate-600 h-screen w-[20%]">

          </div>
          <div className="flex flex-col w-screen h-[200px]">
            <div className="flex justify-end">
              <button
                onClick={toggleVisibility}
                className="w-24 h-7 bg-blue-400 rounded-xl m-7"
                type="submit"
              >
                Carlos
              </button>
            </div>
            <div className=" flex justify-end ">
              {isVisible && (
                <div className="flex flex-col justify-end gap-4  w-[180px] border-solid border-2 border-gray-400 rounded-xl  ">
                  <div className="flex items-center gap-1">
                    <img src="../public/account.png" alt="myprofile" />
                    <button onClick={toggleProfileVisibility}>
                      My Profile
                    </button>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src="../public/exit.png" alt="Logout" />
                    <button className="text-red-600">Logout</button>
                  </div>
                </div>
              )}
            </div>
            {isProfileVisible && (
              <div>
                <Profile />
              </div>
              
            )}
              
             
          </div>
        </div>
      
    </>
  );
}

export default Dasboard;
