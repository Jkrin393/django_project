import React, { Component } from "react";
import { foundEmail} from "./regex"
import Emailname from "./emailname";

class customer_id_order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
        }
    }

    
    
    
  
    componentDidMount() {
    this.get();
    
    }
    
   

    
    get = () => {

        

        const urlToFetch =  ('http://localhost:8000/customers/jkrinsly@game.com/');
        
        console.log(urlToFetch);
        fetch('http://localhost:8000/customers/jkrinsly@game.com/orders')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
                console.log(json);
            })
            .catch(err => console.log(err));
    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>No response detected, attempting to connect...</div>
        }
        else {
            return (
                
                
                <div >
                    
                    
                    <div >
                                    
                    <span>Link 'http://localhost:8000/customers/jkrinsly@game.com/orders <b> returns:</b> </span>                
                    <br></br>
                    <ul>
                            {items.map(item => (
                                <li key={item.order_id}>
                                    <span><b>customer: </b> </span>
                                    {item.customer}
                                    <span><b> game id(s): </b> </span>
                                    
                                
                                    <span><b> month purchased:</b> </span>
                                    {item.purchase_month}
                                    
                                </li>
                            ))}
                        </ul>
                    </div>      
                          
                    
                </div>
            );
        }
    }

}

export default customer_id_order;