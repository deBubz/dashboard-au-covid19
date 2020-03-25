import React from 'react';
// import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Navbar from './components/navbar.components'
import Tab from './components/tab.component'
import Main from './components/main.component'



export default class App extends React.Component {
  render() {
    return (
      // <div ></div>
      <div >
        <Router>
          <Navbar />
          <br />          
          {/* <Route  */}
          <div className='container'>
            <Route exact path='/' component={Main} />
            <Route path='/tab' component={Tab} />
          </div>

        </Router>
      </div>
    );
  }
}


