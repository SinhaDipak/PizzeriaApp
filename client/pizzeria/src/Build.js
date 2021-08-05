import React, { Component } from 'react'
import axios from 'axios';
import './styles/Build.css'
import Navbar from "./Navbar";
import Footer from './Footer';
export default class Build extends Component {
    componentDidMount() {
        axios.get('http://localhost:5000/ingridients')
            .then(res => this.setState({ ingri: res.data }))
            .catch(err => console.log(err))
    }
    constructor(props) {
        super(props)

        this.state = {
            ingri: [],
            totalCost: 0
        }
    }

    clickMe(event, price) {
        const isChecked = event.target.checked;
        if (isChecked)
            this.setState({ totalCost: this.state.totalCost + price });
        else
            this.setState({ totalCost: this.state.totalCost - price });

    }



    render() {
        const x = this.state.ingri.map((data) => {
            return (<tr className="sub">
                <td className="sub1"><img src={data.image} alt="oops" /></td>
                <td className="sub2">
                    <span className="span1">{data.tname}</span>
                    <span className="span2">{'\u20B9'}{data.price + ".00"}</span>
                </td>
                <td className="sub3"> <input type="checkbox" onChange={(e) => { this.clickMe(e, data.price); }} /> <span>ADD</span></td>
            </tr>)
        })
        // console.log(x);
        return (<>
            <Navbar />
            <table className="MainBuild">
                <p className="Build__p">Pizzeria now gives you options to build your own pizza, Customize your pizza by choosing ingredients from the state given below</p>
                {x}<p className="cost">Total cost : {this.state.totalCost}</p>
                <button className="total_cost_btn" onClick={this.addPrice}>Build Ur Pizza</button>
            </table>
            <Footer/>
        </>
        )
    }
}
