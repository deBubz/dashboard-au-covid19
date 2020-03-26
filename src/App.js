import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/navbar.component'
import Tab from './components/tab.component'
import Main from './components/main.component'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <br />
          <div className='container'>
            <Route exact path='/' component={Main} />
            <Route path='/tab' component={Tab} />
          </div>
        </Router>
      </div>
    )    
  }
}
