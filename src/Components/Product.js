import React, { Component } from 'react'
import { Container , Row , Col } from 'react-bootstrap';

class Product extends Component {
  render() {
    let data = this.props.eachProduct;
    return (
      <div className='item'>
        <Container>
          <div className='itemcontent'>
            <Row>
              <Col sm={12} lg={3}><div className='itemcont'><h3>{data.name}</h3></div></Col>
              <Col sm={12} lg={2}><div className='itemcont fs-3'>{data.count}</div></Col>
              <Col sm={4} lg={2}><div className='itemcont'>
                <button className='prod del' onClick={()=>this.props.delete(data)}>Delete</button>
              </div></Col>
              <Col sm={4} lg={3}><div className='itemcont'>
                <button className='prod plus' onClick={()=>this.props.increment(data)}>+</button>
              </div></Col>
              <Col sm={4} lg={2}><div className='itemcont'>
                <button className='prod minus' onClick={()=>this.props.decrement(data)}>-</button>
              </div></Col>
            </Row>
          </div>
        </Container>
        <hr/>
      </div>
    )
  }
}


export default Product;