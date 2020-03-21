import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import axios from 'axios';

// import array from './DataParser'


export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      total: 0,
      recovered: 0,
      deaths: 0,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/data/world')
      .then( res => {
        console.log(res);
        this.setState({
          total: res.data.w_confirmed,
          recovered: res.data.w_recovered,
          deaths: res.data.w_deaths,
        })
      })
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.total}</p>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank"rel="noopener noreferrer">
            Learn React
          </a>
        </header>
        
      </div>
    );
  }
}


