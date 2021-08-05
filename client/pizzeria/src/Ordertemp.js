import React from 'react';
import './styles/Ordertemp.css';
export default function Ordertemp(props) {
    // var toppings=props.pizza.toppings.toString();
    // var ing=props.pizza.ingridents.toString();
    console.log(props.pizza.type);
    const type = props.pizza.type;
    var styles;
    if (type == "veg") {

        styles = {
            width: "30px",
            height: "30px",
            backgroundColor: "Green"
        }
    } else {

        styles = {
            width: "30px",
            height: "30px",
            backgroundColor: "Red"
        }
    }

    return (
        <div className="main-order">
            <div className="b1">
                <h1>{props.pizza.name}</h1>
                <div style={styles}>
                </div>
                <h2>{props.pizza.price}</h2>
            </div>
            <div className="b2">
                <p>{props.pizza.description}</p>
                <b>Ingridents : </b><span>{props.pizza.ingredients.toString()}</span>
                <b>Toppings : </b><span>{props.pizza.topping.toString()}</span>
            </div>
            <div className="b3">
                <img src={props.pizza.image} alt="" />
                <button>Add to cart</button>
            </div>
        </div>
    )
}
