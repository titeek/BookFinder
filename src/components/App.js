import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import BookDetailContainer from './BookDetail/BookDetailContainer';
import IndexContainer from './Index/IndexContainer';
import AuthorDetailsContainer from './AuthorDetails/AuthorDetailsContainer';
import Footer from './Footer';
import TagDetailsContainer from './TagDetail/TagDetailsContainer';

class App extends React.Component {

  render() {
    return(   
      <div className="d-flex flex-column min-vh-100">
        <Router>
        <Nav/>
        <div className="container">
          <Switch>
            <Route path="/" exact component={IndexContainer} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/book/:key/:id/:publishYear" exact component={BookDetailContainer}/>
            <Route path="/author/:key/:id" exact component={AuthorDetailsContainer}/>
            <Route path="/subject/:id" exact component={TagDetailsContainer}/>
          </Switch>
        </div>
        <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;