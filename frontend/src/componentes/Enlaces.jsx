

function Enlaces() {
  return (
    <div className="container mx-auto">
    <h1 className="text-2xl font-bold my-4">Enlaces</h1>
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">USUARIO</th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">HABILITADO</th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">ROL</th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">ACCIONES</th>
         
        </tr>
      </thead>
      <tbody>
        
          <tr>
            <td className="px-6 py-4 whitespace-no-wrap">dfdvdvdv</td>
            <td className="px-6 py-4 whitespace-no-wrap">vdvdvdvd</td>
            <td className="px-6 py-4 whitespace-no-wrap">vdvdvdvd</td>
           
            <td className=" flex text-center gap-3 items-center p-5">
              <button className=" bg-[#16a34a] w-20 rounded-lg ">Edit</button>
              <button className="bg-[#dc2626]  w-20 rounded-lg">Eliminar</button>
            </td>
            
          </tr>
       
      </tbody>
    </table>
  </div>
  )
}

export default Enlaces