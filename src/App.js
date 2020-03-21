import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Navbar from './components/navbar.components'
import Tab from './components/tab.component'
import List from './components/list.component'



export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <Navbar />
          <br />          
          {/* <Route  */}
          <Route exact path='/' component={List} />
          <Route path='/tab' component={Tab} />

        </Router>
      </div>
    );
  }
}


