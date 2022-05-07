import React, { Component } from "react";
import { foundEmail} from "./regex"
import Emailname from "./emailname";

class customerID extends Component {
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
        fetch('http://localhost:8000/customers/jkrinsly@game.com/')
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
                                    
                    <span>Link 'http://localhost:8000/customers/jkrinsly@game.com/ <b> returns:</b> </span>                
                    <br></br>
                    <span><b>first name:</b> </span>
                    {items.first_name}
                    <span><b> last name:</b> </span>
                    {items.last_name}
                    <span><b> email:</b> </span>
                    {items.email}
                    </div>      
                          
                    
                </div>
            );
        }
    }

}

export default customerID;