import React, { Component } from 'react'
import axios from 'axios';
import Ordertemp from './Ordertemp'
import './styles/Order.css'
import Navbar from './Navbar';
import Footer from './Footer';

export default class Order extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pizza: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/posts')
            .then(res => {
                console.log(res.data)
                this.setState({
                    pizza: res.data
                });
            })
            .catch(err => console.log(err))

    }
    render() {
        let x = this.state.pizza.map((pizza) => <Ordertemp pizza={pizza} />)
        return (
            <>
            <Navbar/>
            <div className="main-order-div">{x}</div>
            <Footer />
            </>
        )
    }
}

