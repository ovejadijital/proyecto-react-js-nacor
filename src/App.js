import "./App.css"
import Navbar from "./components/navbar/Navbar"
import {itemListcontainer} from "./components/itemListcontainer/itemListcontainer"
function App() {
  const saludo= "hola chicos"
  return (
   <div>
    <itemListcontainer greeting= "bienvenidos a mi app" saludo={saludo}/>
     <Navbar/>
   </div>
  );
}

export default App;
