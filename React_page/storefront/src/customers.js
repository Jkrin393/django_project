import React, { Component } from "react";

class customerPage extends Component {
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
        fetch('http://localhost:8000/customers/')
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
                                <li key={item.email}>
                                    <span><b>first name:</b> </span>
                                    {item.first_name}
                                    <span><b> last name:</b> </span>
                                    {item.last_name}
                                    <span><b> email:</b> </span>
                                    {item.email}
                                    
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            );
        }
    }

}

export default customerPage;