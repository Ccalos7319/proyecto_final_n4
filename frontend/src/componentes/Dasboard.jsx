import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Profile from "./Profile";
import New from "./New";
function Dashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const [datos, setDatos] = useState();
  useEffect(() => {
    const promesa = fetch("http://127.0.0.1:8000/api/estudiantes");
    Promise.all([promesa]).then(async (values) => {
      const data = await values[0].json();
      if (data.cod === "404") {
        alert(data.message);
      } else {
        setDatos(data);
      }
    });
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const toggleProfileVisibility = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  return (
    <>
      <BrowserRouter>
        <div className="flex">
          <section
            className={`gradient-bg h-screen w-[15%] flex flex-col items-center gap-16 pt-16 fixed `}
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
            <ul className="flex flex-col gap-7 text-white">
              <NavLink
                className={({ isActive }) =>
                  isActive ? " border-b-2 border-white " : null
                }
                to="/"
              >
                <li className="flex items-center gap-5 pb-4">
                  <h2>Home</h2>
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? " border-b-2 border-white " : null
                }
                to="/cursos"
              >
                <li className="flex items-center gap-5 pb-4">
                  <img
                    width="30"
                    height="30"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABmElEQVR4nO3Yv04UQRzA8UVoFHoStLrKgkYpqXgCIw9gwT2ABTyApa0VkcQCHoIQQigksYDEGAvlFYyUEJSEfMiEIdksd+cd7t3tXOZb3v0mM9/9/dnJFkUmk8lkMjWAQ+lx1EkkSYpuIkUiyCINQ85Iw5BCRvAC3/ENU8mJ4BE28Dce56RHbDNFMI/d0itiB7NJieA1zuIRfuNVH2uaI4LH+FDKwgGe9rm2fhEs4muoabT6XLOE07jtH6x3a+yRiOANzktPNZTISo/4KbwtNfTPMKUesG89IqERsV1pzrtmDYdsd1jzrHLL3sSTQSVqE8HzOOcDl+EJx9+n8b500I+Yif+tDtrQQxXBGi5i+I/QHx1i2qXSCVn6VJLbx8K/9hmaSJwwW5VSmusRv4xfpfgrvAsvvaIG/IdImEhiNtb63KyF4zjRBm7oYYl8iX1xr5TGgTqavQnIIg1DzkjDkDNSDPQR7xovJ0EkcDgpInuTIHI98tJyextNnaNkv8JXSe6OVSWLND4jqVOEjpc+n8ddGZlMphgNN6hg3FjAPsDmAAAAAElFTkSuQmCC"
                  />
                  <h2>Cursos</h2>
                </li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? " border-b-2 border-white " : null
                }
                to="/new"
              >
                <li className="flex items-center gap-5 pb-4">
                  <img
                    width="30"
                    height="30"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAATklEQVR4nO3Tyw0AIAgD0O6/GOpS9Wj0RMDfoW8ASkoA5AaSjUM5GTSBgrxU3fvqOP9JVnFvnIUfgurGHMvc0LdxloLCVF3Y8mcWnyTw6/WgPCvfsn3/AAAAAElFTkSuQmCC"
                  />
                  <h2>New</h2>
                </li>
              </NavLink>
            </ul>
          </section>
          <div className="bg-slate-600 h-screen w-[15%]">

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
            <Routes>
             
            <Route path="/new" element={<New />} />
            <Route path="/new" element={<New datos={datos} />} />
           </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Dashboard;
