import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import '../Css/Header.css'

class Header extends Component { 

  render() {
    let counter = this.props.Products;
    counter = counter.filter(e=>{
      return e.count > 0;
    }).length
    counter = counter > 0
    ? <div className='counter bg-warning'>{counter}</div>
    : <div className='counter bg-danger'>{counter}</div>

    return (
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home" className="text-white fw-bold fs-4">Shopping</Navbar.Brand>
          <div className="d-flex">
            <Navbar.Brand>{counter}</Navbar.Brand>
            <Navbar.Brand href="#home" className='text-warning'>ShoppingCart</Navbar.Brand>
            <Navbar.Brand href="#home" className="text-white">ProductDetails</Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    )
  }
}

export default Header;