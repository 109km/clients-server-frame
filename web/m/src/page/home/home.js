import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import logo from './logo.svg';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Hey</Button>
      </div>
    );
  }
  async componentDidMount(){
    const res = await fetch('http://127.0.0.1:7001/user/login/');
    console.log(res);
  }
}

export default Home;
