
import { useEffect, useState } from "react";
function Roles({datosRol }) {
  const [dataRol, setDataRol] = useState([]);

  useEffect(() => {
    setDataRol(datosRol); // Asigna los datos de la API a dataEstudiante
  }, [datosRol]);
 

  return (
    <div className="container mx-auto">
      <div className=" flex justify-between">
        <h1 className="text-2xl font-bold my-4">Roles</h1>
        <button className=" w-[150px] h-8 bg-teal-400 rounded-xl">Agregar Rol</button>
      </div>
      
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">ROL</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">ACCIONES</th>
           
          </tr>
        </thead>
        <tbody>
        {dataRol.map((el) => (
            <tr key={el.id}>
              <td className="px-6 py-4 whitespace-no-wrap">{el.id}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{el.rol}</td>
              
             
              <td className=" flex text-center gap-3 items-center p-5">
                <button className=" bg-[#16a34a] w-20 rounded-lg ">Edit</button>
                <button className="bg-[#dc2626]  w-20 rounded-lg">Eliminar</button>
              </td>
              
            </tr>
           ))};
        </tbody>
      </table>
    </div>
  )
}

export default Roles