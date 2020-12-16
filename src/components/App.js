import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import BookDetail from './BookDetail';
import Index from './Index';
import AuthorDetail from './AuthorDetail';
import Footer from './Footer';

class App extends React.Component {

  render() {

    return(   
      <div className="d-flex flex-column min-vh-100">
        <Router>
        <Nav/>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/book/:key/:id/:publishYear" exact component={BookDetail}/>
            <Route path="/author/:key/:id" component={AuthorDetail}/>
          </Switch>
        </div>
        <Footer/>
        </Router>
      </div>
        
      
    );
  }
}

export default App;