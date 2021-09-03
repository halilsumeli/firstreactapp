import React, { Component } from 'react'
import { ListGroupItem, ListGroup } from 'reactstrap'
export default class Categorylist extends Component {

state = {
            categories: [
                { categoryid: 1, categoryname: "beverages" },
                { categoryid: 2, categoryname: "condiments" }
            ],
            currentCategory:"",
            statedeger:"",
            halilsayim:0
        };

        changeCategory=(category)=>{
            this.setState({currentCategory:category.categoryname})
        }

        benimclik=(deger)=>{
            this.setState({statedeger:deger})
        }
        haliltıklama=(sayim)=>{
            const val = this.state.halilsayim + sayim;
            this.setState({halilsayim:val})
        }



    render() {
        console.log(this.state);

        return (
            <div >
                <h3>{this.props.info.title}</h3>
                <ListGroup>
                    {
                        this.state.categories.map(category =>
                        (<ListGroupItem onClick={()=>this.changeCategory(category)}key={category.categoryid}>{category.categoryname}</ListGroupItem>
                        ))}
                </ListGroup>
                
                <ListGroup>
                    <ListGroupItem onClick={()=>this.changeCategory({ categoryid: 1, categoryname: "beverages" })} key={1}>beverages</ListGroupItem>
                </ListGroup>
                <ListGroup>
                    <ListGroupItem onClick={()=>this.mclikbeni("bizimdeger")} key={2}>bizimlist</ListGroupItem>
                </ListGroup>
                <ListGroup>
                    <ListGroupItem onClick={()=>this.haliltıklama(1)} key={3}>ghfhgf</ListGroupItem>
                </ListGroup>
                <h4>{this.state.currentCategory}</h4>
                <h4>{this.state.statedeger}</h4>
                <h4>{this.state.halilsayim}</h4>
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