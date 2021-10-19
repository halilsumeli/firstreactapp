import React, { Component } from 'react';
import Categorylist from './Categorylist';


import Navi from './Navi';
import Productlist from './Productlist';
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs"
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound"
import CartList from "./CartList"
export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] }
  componentDidMount() {
    this.getProducts()
  }
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryname });
    this.getProducts(category.id)
  };

  getProducts = categoryId => {
    let url = "http://localhost:3000/products"
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url).then(response => response.json()).then(data => this.setState({ products: data }));;
  }

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart!", 0.3);
  }
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id)
    this.setState({ cart: newCart })
  }
  render() {
    let Productinfo = { title: "ProductList" };
    let Categoryinfo = { title: "CategoryList" }
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
          <Row>
            <div style={{ display: 'contents' }}>
              <Col xs="3"><Categorylist currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={Categoryinfo} /></Col>
              <Col xs="9">
                <Switch>
                  <Route exact path="/" render={props => (
                    <Productlist
                      products={this.state.products}
                      addToCart={this.addToCart}
                      currentCategory={this.state.currentCategory}
                      info={Productinfo} />
                  )
                  } />
                  <Route exact path="/cart" componenet={CartList} />
                  <Route component={NotFound}></Route>
                </Switch>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}




