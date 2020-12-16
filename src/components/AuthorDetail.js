import React from 'react'
import Loader from 'react-loader-spinner'

import olApi from '../olApi';

import WebLink from './WebLink';
import WebLinkList from './WebLinkList';

class AuthorDetail extends React.Component {
  state = {author: {}, error: ''};


  componentDidMount() {
    olApi.get(`${this.props.match.params.key}/${this.props.match.params.id}.json`)
      .then((response) => {
          this.setState({author: response.data});
          console.log(response.data);
        }).catch((error) => {
          console.log(error);
          this.setState({error: 'Failed to load author data! Author unknown.'});
        });
  }

  render() {
    const numberToSlice = 10;
    let element; 
    let photoString = "";
    let birthDate = "";
    let bio = "";
    let webLinkList;

    if(this.state.error) {
      element = <div className="alert alert-danger mt-3">{this.state.error}</div>;
    } else if(!this.state.author.name) {
      element = 
      <div className="d-flex justify-content-center mt-5">
        <Loader type="ThreeDots" color="#ffb000" height={50} width={120}timeout={999999} />
      </div>
    } else {
      photoString = this.state.author.photos ? "http://covers.openlibrary.org/b/id/" + this.state.author.photos[0] + "-L.jpg" : "http://via.placeholder.com/300x400";

      bio = this.state.author.bio ? this.state.author.bio.value : "No more informations";
      birthDate = this.state.author.birth_date ? this.state.author.birth_date : "---"
      this.state.author.links ?
      webLinkList = this.state.author.links.slice(0, numberToSlice).map(link => (
        <WebLink key={link.url} link={link.url}/>
      )) : webLinkList = <WebLink key="nokey" link="There is no informations"/>;

    

      element = 
      <div className="row mt-3">
          <div className="col-4">
            <img src={photoString} alt="" className="img-fluid"/>
            <h5>Birthdate</h5>
            <p>{birthDate}</p>
            <h5>Last modified</h5>
            <p>{this.state.author.last_modified.value.slice(0, 10)}</p>
            <h5>Links</h5>
            <WebLinkList list={webLinkList}></WebLinkList>
          </div>
          <div className="col-8">
            <h1>{this.state.author.name}</h1>
            <p>{bio}</p>
          </div>
      </div>
    }

    return(
      <div className="container">
        {element}
      </div>
    );
  }
}

export default AuthorDetail;