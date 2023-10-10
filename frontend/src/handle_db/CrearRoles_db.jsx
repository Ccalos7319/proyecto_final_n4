import { useRef } from "react";
import { createRol } from "../../api/scrum-api";
import { useNavigate } from "react-router-dom";

export default function CrearUusuario_db() {
  const navigate = useNavigate();
  const rol = useRef(null);
  const usuariocreacion = useRef(null);
  const usuariomodificacion = useRef(null);

  const test = async (event) => {
    event.preventDefault();

    const datoRol = {
     
      rol: rol.current.value,
      usuariocreacion: usuariocreacion.current.value,
      usuariomodificacion:usuariomodificacion.current.value
    };
    

    await createRol(datoRol);
    navigate("/");
  };

  return (
    <div>
      <form
        className=" flex flex-col items-center pb-4"
        onSubmit={test}
      >
        
        <div className="flex flex-col justify-center ">
        <p className="gradient-bg w-full  ">
          Llena los campos para agregar un usuario
        </p>
          <div>
            <p className="pt-6 pb-3">Rol:</p>

            <div className="input-container w-[460px] ">
              <input
                ref={rol}
                className="input w-[400px] rounded-xl border-solid border-2 border-gray-400"
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Nombre"
              />
              
              
            </div>
         
          <div>
            <p className="pt-6 pb-3">Uusuario Creacion:</p>

            <div className="input-container w-[460px] ">
              <input
                ref={usuariocreacion}
                className="input w-[400px] rounded-xl border-solid border-2 border-gray-400"
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Uusuario Creacion"
              />
              
              
            </div>
          </div>
          <div>
            <p className="pt-6 pb-3">Uusuario Modificacion:</p>

            <div className="input-container w-[460px] ">
              <input
                ref={usuariomodificacion}
                className="input w-[400px] rounded-xl border-solid border-2 border-gray-400"
                id="nombre"
                name="nombre"
                type="text"
                placeholder="usuarioModificacion"
              />
              
              
            </div>
          </div>
        </div>
        </div>
        <button
          type="submit"
          className="w-[150px] h-8 bg-teal-400 rounded-xl m-6 "
        >
          Agregar
        </button>
      </form>
    </div>
  );
}
