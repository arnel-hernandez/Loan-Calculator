import React, { Component } from 'react'
import logo from '../logo.svg';
import '../App.css';

import Navbar from './Navbar/Navbar'
import LoanCalculator from './LoanCalculator'

export class Home extends Component {
    
    render() {
        return (
            <div>
                <header className="App-header">
                <Navbar />
                  <img src={logo} className="App-logo" alt="logo" />
                  <LoanCalculator />
                  <br></br>
                </header>
            </div>
        )
    }
}

export default Home
