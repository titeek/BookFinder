import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap';

function Nav() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark nav">
      <div className="container">
        <Link className="navbar-brand" to="/">Book Finder</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link to="/" className="nav-item nav-link mr-5 font-weight-bold"><p className="m-0 text-warning">Home</p></Link>
            <Link to="/about" className="nav-item nav-link mr-5"><p className="m-0 ">About</p></Link>
            <Link to="/contact" className="nav-item nav-link"><p className="m-0 ">Contact</p></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;