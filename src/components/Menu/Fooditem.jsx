import React from 'react'
import './Fooditem.css'

function Fooditem(props) {
    const {fooditem, onAdd} = props;
    return (
        <div className='fooditem-card' style={{background:fooditem.bg}}>
            <div className="img-container">
            <img className='item-img' src={fooditem.imgsrc} alt={fooditem.name} />
            </div>
            <div className='card-text'>
            <h3>{fooditem.name}</h3>
            <h4>&#8377; {fooditem.price}</h4>
            <h4>{fooditem.portion}gms</h4>
            <button onClick={()=>onAdd(fooditem)}>Add To Basket</button>
            </div>
        </div>
    )
}

export default Fooditem;
