import "./App.css"
import Navbar from "./components/navbar/Navbar"
import ItemListContainer from "./components/itemListcontainer/ItemListContainer";
function App() {
  const saludo= "hola chicos"
  return (
   <div>
    <ItemListContainer greeting= "bienvenidos a mi app" saludo={saludo}/>
     <Navbar/>
   </div>
  );
}

export default App;
