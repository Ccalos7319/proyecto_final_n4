import { useRef } from "react";
import { create } from "../../api/scrum-api";
import { useNavigate } from "react-router-dom";

export default function CrearUusuario_db() {
  const navigate = useNavigate();
  const id_persona = useRef(null);
  const usuario = useRef(null);
  const clave = useRef(null);
  const habilitado = useRef(null);
  const fecha = useRef(null);
  const id_rol = useRef(null);
  const usuariocreacion = useRef(null);
  const usuariomodificacion = useRef(null);

  const test = async (event) => {
    event.preventDefault();

    const datosUsuario = {
      id_persona: id_persona.current.value,
      usuario: usuario.current.value,
      clave: clave.current.value,
      habilitado: habilitado.current.value,
      fecha: fecha.current.value,
      id_rol: id_rol.current.value,
      usuariocreacion: usuariocreacion.current.value,
      usuariomodificacion:usuariomodificacion.current.value
    };
    

    await create(datosUsuario);
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
            <p className="pt-6 pb-3">Id_perona:</p>

            <div className="input-container w-[460px] ">
              <input
                ref={id_persona}
                className="input w-[400px] rounded-xl border-solid border-2 border-gray-400"
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Nombre"
              />
              
              
            </div>
          </div>
          <div>
            <p className="pt-6 pb-3">Usuario:</p>

            <div className="input-container w-[460px] ">
              <input
                ref={usuario}
                className="input w-[400px] rounded-xl border-solid border-2 border-gray-400"
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Nombre"
              />
              
              
            </div>
          </div>
          <div>
            <p className="pt-6 pb-3">Clave:</p>

            <div className="input-container w-[460px] ">
              <input
                ref={clave}
                className="input w-[400px] rounded-xl border-solid border-2 border-gray-400"
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Nombre"
              />
              
              
            </div>
          </div>
          <div>
            <p className="pt-6 pb-3">Habilitado:</p>

            <div className="input-container w-[460px] ">
              <input
                ref={habilitado}
                className="input w-[400px] rounded-xl border-solid border-2 border-gray-400"
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Nombre"
              />
              
              
            </div>
          </div>
          <div>
            <p className="pt-6 pb-3">Fecha:</p>

            <div className="input-container w-[460px] ">
              <input
                ref={fecha}
                className="input w-[400px] rounded-xl border-solid border-2 border-gray-400"
                id="nombre"
                name="nombre"
                type="date"
                placeholder="Fecha"
              />
              
              
            </div>
          </div>
          <div>
            <p className="pt-6 pb-3">Rol:</p>

            <div className="input-container w-[460px] ">
              <input
                ref={id_rol}
                className="input w-[400px] rounded-xl border-solid border-2 border-gray-400"
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Rol"
              />
              
              
            </div>
          </div>
          <div>
            <p className="pt-6 pb-3">Rol:</p>

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
            <p className="pt-6 pb-3">Rol:</p>

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
