import React, { Component } from 'react';

// import img from '../img.PNG';
import './Navbar.css';




export default class NavBar extends Component {
   
    render() {
        
        return (           
                <nav className="navbar navbar-expand-sm px-sm-5 ">
                
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <a href="/" className="nav-link link text-capitalize navbar-brand">
                                nagesh martha
                            </a>
                        </li>
                    </ul>
                    
                    <button onClick={this.props.contentClickHandler} className="info ml-auto"><i class="fa fa-bars"></i></button>                    
                </nav>

            
        )
    }
}
