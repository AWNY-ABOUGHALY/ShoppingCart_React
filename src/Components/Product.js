import React, { Component } from 'react'

class Product extends Component {
  data = this.props.eachProduct;
  render() {
    return (
      <div className='item'>
        <div className='itemcontent'>
          <div className='itemcont'><h3>{this.data.name}</h3></div>
          <div className='itemcont itemcounts fs-4'>{this.data.count}</div>
          <div className='itemcont'>
            <button className='prod del' onClick={()=>this.props.delete(this.data)}>Delete</button>
          </div>
          <div className='itemcont'>
            <button className='prod plus' onClick={()=>this.props.increment(this.data)}>+</button>
          </div>
          <div className='itemcont'>
            <button className='prod minus' onClick={()=>this.props.decrement(this.data)}>-</button>
          </div>
        </div>
        <hr/>
      </div>
    )
  }
}


export default Product;