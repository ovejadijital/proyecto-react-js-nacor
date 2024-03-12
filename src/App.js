import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/Navbar"
import ItemListContainer from './components/itemListcontainer/ItemListContainer';
function App() {
  const bienvenida= "hola chicos"
  console.log("soy app y me renderice")
  return (
   <div>
      
     <Navbar/>
     <ItemListContainer greeting= "bienvenidos a mi app" bienvenida={bienvenida}/>
   </div>
  );
}

export default App;
