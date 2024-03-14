import React from 'react'

const Item = ({prod}) => {
    console.log(prod)
  return (
    <div className='card' style={{width:'20rem'}}>
        <img src={prod.img} alt={prod.name} className='card-img-top'/>
        <div className='card-body'>
            <p className='card-taxt'></p>
        </div>
        <button className='btn btn-primary'>ver mas</button>
    </div>
  )
}

export default Item