import React, { Component } from 'react';
import Categorylist from './Categorylist';
import BizimTest from './bizimtest';

import Navi from './Navi';
import Productlist from './Productlist';
import { Container, Row, Col } from "reactstrap";
export default class App extends Component {
  state = { currentCategory: "", products: [] }
  componentDidMount(){
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

  render() {
    let Productinfo = { title: "ProductList" };
    let Categoryinfo = { title: "CategoryList" }
    return (
      <div  >
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <div style={{ display: 'contents' }}>
              <Col xs="3"><Categorylist currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={Categoryinfo} /></Col>
              {/* <Col xs="3"><BizimTest info={Categoryinfo}/></Col> */}
              <Col xs="9"><Productlist products={this.state.products}
                currentCategory={this.state.currentCategory} info={Productinfo} /></Col>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}
