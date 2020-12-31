import React, {Component} from 'react';
import logo from '../img/logo.png'

class Header extends React.Component{
    render(){
        return(
            <div>
                <div className="brand">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4">
                                <div className="b-logo">
                                    <a href="index.html">
                                        <img src={logo} alt="Logo"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5">
                                <div className="b-search">
                                    <input type="text" placeholder="Search" />
                                    <button><i className="fa fa-search"></i></button>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className ="signIn">
                                    <a href="profile.html" className="nav-item nav-link">Sign In</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;