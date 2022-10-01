import React, {Component, Fragment} from "react";
import Maincontent from "./Components/Maincontent";
import Header from "./Components/Header";

class App extends Component{
  state = {
    Products: [
      { id: 0, name: "Chipsy", count: 1},
      { id: 1, name: "Molto", count: 2},
      { id: 2, name: "Chooclate", count: 3},
      { id: 3, name: "Pepsi", count: 5},
    ]
  }

  reset = ()=>{
  let Products = this.state.Products;
  Products.map(e=>{
    e.count = 0
    return e;
  })
  this.setState({Products})
  }

  increase = (obj)=>{
    let Products = this.state.Products;
    Products = Products.map(e=>{
      e.id === obj.id && e.count++
      return e;
    })
    this.setState({Products})
  }

  decrease = (obj)=>{
  let Products = this.state.Products;
  Products = Products.map(e=>{
    if(e.id === obj.id) {
      e.count > 0 && e.count--
    }
    return e;
  })
  this.setState({Products})
  }

  del = (obj)=>{
    let Products = this.state.Products;
    Products = Products.filter(e=>{
      return e.id !== obj.id
    })
    this.setState({Products})
  }

  render() {
    return (
      <Fragment>
        <Header Products={this.state.Products}/>
        <Maincontent 
          Products={this.state.Products}
          resetFunc={this.reset}
          increment={this.increase}
          decrement={this.decrease}
          delete={this.del}/>
      </Fragment>
    )
  }
}

export default App;