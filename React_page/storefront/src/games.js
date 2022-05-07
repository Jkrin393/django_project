import React, { Component } from "react";

class gamesPage extends Component {
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
        fetch('http://localhost:8000/games/')
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
                                <li key={item.game_id}>
                                    <span><b>title:</b> </span>
                                    {item.title}
                                    <span><b> Genre:</b> </span> 
                                    {item.genre}
                                    <span><b> release date:</b> </span>
                                    {item.release_date}
                                    
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            );
        }
    }

}

export default gamesPage;