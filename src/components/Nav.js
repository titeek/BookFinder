import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark p-0 nav">
      <div className="container">
        {/* <Link to="/" className="navbar-brand">Book Finder</Link> */}
        <div className="navbar-nav ml-auto">
          <Link to="/" className="nav-item nav-link mr-5 font-weight-bold"><p className="m-0 text-warning">Home</p></Link>
          <Link to="/about" className="nav-item nav-link mr-5"><p className="m-0 ">About</p></Link>
          <Link to="/contact" className="nav-item nav-link"><p className="m-0 ">Contact</p></Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;