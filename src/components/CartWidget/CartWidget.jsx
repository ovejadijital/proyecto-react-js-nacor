import "./cartWidget.css"
const CartWidget = () =>{
    return (
        <div className="container">
        <img className="cart" src='./images/carrito.png' alt="un carrito"/>
        <span className="badge">10</span>
        </div>
    )
}

export default CartWidget