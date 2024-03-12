import "./navbar.css"
import CartWiget from "../CartWidget/CartWidget"
const Navbar = () => {

    console.log("soy Navbar y me renderice")
return(

    <nav className="navcontainer">
    <a className="link" href='/'>nacorapp</a>
    <div className="linkscontainer">

    <a className="link" href='/'>nuevo</a>
    <a className="link" href='/'>mas vendidos</a>
    <a className="link" href='/'>ofertas</a>

    </div>

    <CartWiget/>
    </nav>

)

}

export default Navbar