import React from 'react'
import './Main.css'
import Fooditem from './Fooditem';

function Main(props) {
    const {fooditems, onAdd} = props;
    return (
        <div className='main'>
            {fooditems.map((fooditem) =>(
                <Fooditem key= {fooditem.id} fooditem={fooditem} onAdd={onAdd}/>
            ))}
        </div>
    )
}

export default Main
