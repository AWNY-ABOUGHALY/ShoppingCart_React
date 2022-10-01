import React, { Component } from 'react'
import '../Css/Product.css'
import Product from './Product'

class Maincontent extends Component {

  render() {
    let Products = this.props.Products.map((e)=>(
        <Product key={e.id}
        eachProduct={e}
        increment={this.props.increment}
        decrement={this.props.decrement}
        delete={this.props.delete}/>
    ))
    return (
    <div className='wholecontent text-center'>
        <div className='headtitle mt-5 mb-4 text-success'>
        <h1>Shopping Cart</h1>
        </div>
        <div className='bodyContent'>
            {Products.length > 0 ? Products : <div className="emptyDiv">Empty</div>}
        </div>
        <div className='text-start mx-5'>
            <button className='btn btn-dark fs-5 px-5 mx-5' onClick={this.props.resetFunc}>Reset</button>
        </div>
    </div>
    )
  }
}

export default Maincontent;