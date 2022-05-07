import React, { Component } from "react";

class orderPage extends Component {
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
        fetch('http://localhost:8000/orders/')
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
            return <div>Loading</div>
        }
        else {
            return (
                
                <div >
                    
                    <div >
                        <ul>
                            {items.map(item => (
                                <li key={item.order_id}>
                                    <span><b>customer: </b> </span>
                                    {item.customer}
                                    <span><b> game id(s): </b> </span>
                                    <ul>
                                        {item.game.map(gameId => (
                                            <li key={gameId}>
                                                {gameId}        
                                            </li>
                                        ))}
                                    </ul>
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

export default orderPage;

