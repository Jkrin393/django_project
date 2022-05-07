import React from 'react';
import styled from 'styled-components';
import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Routes,
 } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import Customers from './customers';
import Customers_id from './customers_id';
import Orders from './orders';
import Emailname from './emailname';
import Games from './games';
import Customer_ID_order from './customer_id_order';
import Customer_id_order_id from './custer_id_order_id';


class App extends Component {
    render() {
      

        // Whatever is returned is rendered
        return (
          <div>
              <header >
                <h3>Josh's Games Shop</h3>
              </header>
           
              
              <Customers />
              <em>following the link for a specific customer(jkrinsly@game.com) returns: </em><br/><br/>
              <Customers_id />
              <br></br>
              <Customer_ID_order />


              <em>following the link for a specific customers(jkrinsly@game.com) specific order -  here order 8 is used - returns: </em><br/><br/>
              <Customer_id_order_id/>

              <br></br>
              All Orders: 
              <Orders />
              <br></br>
              All Games: 
              <Games />

          </div>
        )
    }
}

export default App;

