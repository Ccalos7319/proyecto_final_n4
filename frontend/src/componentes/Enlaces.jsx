import { useEffect, useState } from "react"

function Enlaces({datosEnlaces}) {

const   [dataEnlaces, setDataEnlaces] =useState([]);
useEffect(()=> {

  setDataEnlaces(datosEnlaces);
},[datosEnlaces])




  return (
    <div className="container mx-auto">
    <h1 className="text-2xl font-bold my-4">Enlaces</h1>
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Nro</th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Enlace</th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Ruta</th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Rol</th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Aciones</th>
        </tr>
      </thead>
      <tbody>
        
      {dataEnlaces.map((el) => (
              <tr key={el.id}>
                <td className="px-6 py-4 whitespace-no-wrap">{el.id}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{el.descripcion}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{el.id_pagina.url}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{el.id_rol}</td>
                <td className=" flex text-center gap-3 items-center p-5">
                  <button className=" bg-[#16a34a] w-20 rounded-lg ">
                    Edit
                  </button>
                 
                </td>
              </tr>
            ))}
       
      </tbody>
    </table>
  </div>
  )
}

export default Enlaces