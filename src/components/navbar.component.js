import React from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
    render() {
        return (
            <div className='bg-start'>
                <nav className='container navbar navbar-dark navbar-expand-lg bg-dark'>
                    <Link to='/' className='navbar-brand'>Header</Link>
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav mr-auto'>
                            <li className='navbar-item'>
                                <Link to='/tab' name="cheese" className='nav-link' props="chocolate">Tab1</Link>
                            </li>
                            <li className='navbar-item'>
                                <Link to='/tab' name="cookies" className='nav-link' props="cookies">Tab2</Link>
                            </li>
                            <li className='navbar-item'>
                                <Link to='/tab' name="ham" className='nav-link' props="cheese">Tab3</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}