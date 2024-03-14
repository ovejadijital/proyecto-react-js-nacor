
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./componentes/navbar/NavBar";
import ItemListContainer from "./componentes/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  
  return (
   <div>
      <NavBar/>
      <ItemListContainer greeting={"hola bienvenidos"}/>
      <ItemDetailContainer/>
   </div>
  );
}

export default App;
