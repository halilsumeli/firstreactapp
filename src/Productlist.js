import React, { Component } from 'react'
import { Table,Button } from "reactstrap"
export default class Productlist extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.info.title}-{this.props.currentCategory}</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product name</th>
                            <th>Unit Price</th>
                            <th>Qantity Per Unit</th>
                            <th>Units In Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (
                            <tr key={product.id}>

                                <th scope="row">{product.id}</th>
                                <td>{product.productName}</td>
                                <td>{product.UnitPrice}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitsInStock}</td>
                                <td><Button onClick={()=>this.props.addToCart(product)} color="info">add</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}



