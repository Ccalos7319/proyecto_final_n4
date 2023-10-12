import { BrowserRouter, Routes, Route } from "react-router-dom"

<<<<<<< HEAD
import Login from "./Login"
import Dashboard from "./componentes admin/Dashboard"
import Edit from "./componentes admin/Edit"
import Enlaces, { CreateEnlace, EditEnlace } from "./componentes admin/Enlaces"
import Usuarios from "./componentes admin/Usuarios"
import Roles, { CreateRoles, EditRoles } from "./componentes admin/Roles"
import Bitacoras, { CreateUBitacora, EditBitacora } from "./componentes admin/Bitacoras"
import { EditUsuario, CreateUsuario } from "./componentes admin/Usuarios"
import Parametros from "./componentes admin/Parametros"
=======
import Login from "./LoginUser"
import Dasboard from "./componentes/Dasboard"
import Parametros from "./componentes/Parametros"
import Roles from "./componentes/Roles"
import New from "./componentes/New"
import Bitacoras from "./componentes/Bitacoras"
import Enlaces from "./componentes/Enlaces"


>>>>>>> 4110af0944fe3c12a2c49a61c56df05ecbc33ac6



function App() {
   

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
<<<<<<< HEAD
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard edit" element={<Edit />} />
                <Route path="/enlaces" element={<Enlaces  />} />
                <Route path="/parametros" element={<Parametros />} />
                <Route path="/usuarios" element={<Usuarios  />} />
                <Route path="/roles" element={<Roles  />} />
                <Route path="/bitacoras" element={<Bitacoras  />} />
                <Route path="/edit/:idusuario" element={<EditUsuario />} />
                <Route path="/edit bitacoras/:idbitacora" element={<EditBitacora />} />
                <Route path="/edit enlace/:idenlace" element={<EditEnlace />} />
                <Route path="/edit roles/:idrol" element={<EditRoles />} />
                <Route path="/create usuario" element={<CreateUsuario />} />
                <Route path="/create roles" element={<CreateRoles />} />
                <Route path="/create enlace" element={<CreateEnlace />} />
                <Route path="/create bitacora" element={<CreateUBitacora />} />
=======
                <Route path="/dasboard" element={<Dasboard />} />
                <Route path="/parametros" element={<Parametros />} />
            <Route path="/roles" element={<Roles  />} />
            <Route path="/usuario" element={<New/>} />
            <Route path="/bitacoras" element={<Bitacoras />} />
            <Route path="/enlaces" element={<Enlaces  />} />
>>>>>>> 4110af0944fe3c12a2c49a61c56df05ecbc33ac6
                
            </Routes>
        </BrowserRouter>
    )
}

export default App
