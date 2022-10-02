import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
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
    <div className='wholecontent text-center py-2'>
      <div className='headtitle mt-5 mb-4 text-success'>
        <h1>Shopping Cart</h1>
      </div>
      <div className='bodyContent'>
        {Products.length > 0 ? Products : <div className="emptyDiv">Empty</div>}
      </div>
      <Container>
        <Row>
          <Col sm={6}><div className='text-md-end'><button className='btn btn-dark control fs-5 py-2 my-1 mx-3' onClick={this.props.resetFunc}>Reset</button></div></Col>
          <Col sm={6}><div className='text-md-start'><button className='btn btn-dark control fs-5 py-2 my-1 mx-3' onClick={this.props.reloadFunc}>Reload</button></div></Col>
        </Row>
      </Container>
    </div>
    )
  }
}

export default Maincontent;