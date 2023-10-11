import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./LoginUser"
import Dasboard from "./componentes/Dasboard"
import Parametros from "./componentes/Parametros"
import Roles from "./componentes/Roles"
import New from "./componentes/New"
import Bitacoras from "./componentes/Bitacoras"
import Enlaces from "./componentes/Enlaces"





function App() {
   

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dasboard" element={<Dasboard />} />
                <Route path="/parametros" element={<Parametros />} />
            <Route path="/roles" element={<Roles  />} />
            <Route path="/usuario" element={<New/>} />
            <Route path="/bitacoras" element={<Bitacoras />} />
            <Route path="/enlaces" element={<Enlaces  />} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default App
