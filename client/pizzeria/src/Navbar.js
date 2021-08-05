import "./styles/navbar.css"
import React, { Link } from 'react-router-dom'
import MainPage from './MainPage'
const change = () => {
    console.log("HII")
    // return(
    //     <MainPage/>
    // )
}
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="left">
                <span>Pizzeria</span>
                <Link to='/' ><img className="image_tag" src={process.env.PUBLIC_URL + "./PizzeriaLogo.png"} alt="Miss" onClick={change} /></Link>
                <Link to='/Order' className="link" >Order Pizza</Link>
                <Link to='/Build' className="link" >Build ur Pizza</Link>
            </div>
            <div className="right">
                <div className="cart">
                    <img style={styles.cartIcon} src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-shopping-cart_90604.png" alt="cart-icon" />
                    <span> Shopping cart</span>
                </div>
            </div>
        </div>
    )
}



const styles = {
    cartIcon: {
        height: 40,
        // marginRight: 20
    }
}
