import React, { Component } from 'react'
import { ListGroupItem, ListGroup } from 'reactstrap'
export default class Categorylist extends Component {
    state = {
        categories: []
    };

    componentDidMount() {
        this.getCategories();
    }

    getCategories = () => {
        fetch("http://localhost:3000/categories").then(response => response.json()).then(data => this.setState({ categories: data }));;
    }
    render() {
        return (
            <div >
                <h3>{this.props.info.title}</h3>
                <ListGroup>
                    {
                        this.state.categories.map(category =>
                        (<ListGroupItem onClick={() => this.props.changeCategory(category)} key={category.id}>{category.categoryname}</ListGroupItem>
                        ))}
                </ListGroup>

                <h4>{this.props.currentCategory}</h4>
            </div>
        );
    }
}

// export default class Categorylist extends Component {
//     constructor(props) {
//         super(props)

//         console.log(this.props)
//         // -> { icon: 'home', … }

//         this.state = {
//             categories: [
//                 { categoryid: 1, categoryname: "beverages" },
//                 { categoryid: 2, categoryname: "condiments" }
//             ]
//         };
//     }

//     render() {
//         return (
//             <div >
//                 <h3>{this.props.info.title}</h3>
//                 <ListGroup>
//                     {
//                         this.state.categories.map(category =>
//                         (<ListGroupItem key={category.categoryid}>{category.categoryname}</ListGroupItem>
//                         ))}
//                 </ListGroup>
//             </div>
//         );
//     }

// }