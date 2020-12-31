import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => (
    <div class="nav-bar">
        <div class="container">
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                <a href="#" class="navbar-brand">MENU</a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav mr-auto">
                        <Link to="/" class="nav-item nav-link">Home</Link>
                        <Link to="/Coronavirus" class="nav-item nav-link">Coronavirus</Link>
                        <Link to="/Technology" class="nav-item nav-link">Technology</Link>
                        <Link to="/Environment" class="nav-item nav-link">Environment</Link>
                        <Link to="/International" class="nav-item nav-link">International</Link>
                    </div>
                </div>
            </nav>
        </div>
</div>
);
export default NavBar;
