import React, { useEffect } from "react"

import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({greeting,}) => {
    console.log("soy itemListContainer y me renderice")
    const [saludo, setsaludo]=useState("hola")
    const [numero, setNumero] = useState(0)
    const cambiarsaludo = () =>{
        setsaludo("chau")
    }
    const sumar = () =>{
        setNumero (numero + 1)
    }

    useEffect(()=>{
        console.log("me ejecuto todas las veces")
    })

    useEffect(()=>{
        console.log("me ejecuto una vez")
    },[])

    useEffect(()=>{
        console.log("me ejecuto cuando numero cambie")
    },[numero])
    return(
        <div>
            <h1>{greeting}</h1>
            <p>{numero}</p>
            <button className="btn btn-primary" onClick={sumar}>
              +
            </button>
            <button onClick={cambiarsaludo}>{saludo}</button>
            <ItemCount stock={15}/>
        </div>
    )
}

    export default ItemListContainer
    