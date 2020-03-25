import React from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
    render() {
        return(
            <div className='bg-dark'>
                <nav className='container navbar navbar-dark bg-dark navbar-expand-lg'>
                    <Link to='/' className='navbar-brand'>Header</Link>
                    <div className='collapse navbar-collapse'>
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to='/tab' className='nav-link'>Tab 1</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to='/' className='nav-link'>Tab 2</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to='/' className='nav-link'>Tab 3</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
