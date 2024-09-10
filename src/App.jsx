import { BrowserRouter, Route, Routes } from "react-router-dom";
import Computadoras from "./componentes/Computadoras/Computadoras";
import Sillas from "./componentes/Sillas/Sillas";
import Celulares from "./componentes/Celulares/Celulares";
import Home from "./componentes/Home/Home";
import Menu from "./componentes/Menu/Menu";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/computadoras" element={<Computadoras />} />
          <Route path="/sillas/:id" element={<Sillas />} />
          <Route path="/celulares" element={<Celulares />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      {/* <h1>Etiquetas de Enlaces</h1>
      <a href="https://www.infobae.com" target='_blank'> Infobae</a>
      <a href=""> Home</a> */}
    </div>
  );
};

export default App;

//SPA = Single Page Application
//CSR = Renderizado del lado del cliente (Client Side Rendering)
//SSR = Renderizado del lado del servidor (Server Side Rendering)

//React Router: es una libreria de enrutamiento para React
//Nos permite navegar entre componentes sin tener que recargar la aplicacion.

//¿como la usamos?
//1) Instalamos: npm install react-router-dom
//2) Importamos en nuestra App los siguientes componentes de la librera:
//BrowserRouter, Route, Routes
//BrowserRoutes: en componente que envuelve nuestra aplicacion y habilita la navegacion entre componentes.
//Routes: define las rutas de navegacion
//Route: Define una ruta en aprticular
