import React from 'react'
import Loader from 'react-loader-spinner'
import LinkIcon from '@material-ui/icons/Link';

import olApi from '../olApi';

import WebLink from './WebLink';
import WebLinkList from './WebLinkList';

import '../scss/dist/author.css';

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
      element = 
      <div class="mt-3 alert alert-danger customAlert" role="alert">
        <h4 class="alert-heading">Something goes wrong!</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel corrupti necessitatibus cumque! Iste sint perspiciatis dolores quis doloremque quod. Possimus modi rerum debitis sed quaerat dolore delectus nesciunt quod iusto!</p>
        <hr/>
        <p class="m-0">Error message:</p>
        <p class="mb-0 font-weight-bold">{this.state.error}</p>
      </div>
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
        <WebLink key={link.url} link={link.url} isLink={true}/>
      )) : webLinkList = <WebLink key="nokey" isLink={false}/>;

    

      element = 
      <div className="row mt-3 authorDetails">
          <div className="col-sm-12 col-md-4 col-lg-3">
            <img src={photoString} alt="" className="img-fluid"/>
            <div className="mt-3 mb-3 authorDetails_birthdateSection">
              <h5 className="font-weight-bold">Birthdate</h5>
              <p>{birthDate}</p>
              <h5 className="font-weight-bold">Last modified</h5>
              <p className="m-0">{this.state.author.last_modified.value.slice(0, 10)}</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-9">
            <section className="authorDetails_infoSectionSingle">
              <h2 className="font-weight-bold">{this.state.author.name}</h2>
              <p>{bio}</p>
            </section>
            <section className="mt-3 authorDetails_infoSectionSingle">
              <section className="d-flex align-items-center mb-3">
                <LinkIcon/><h4 className="font-weight-bold ml-2 m-0">Links</h4>
              </section>
              <WebLinkList list={webLinkList}></WebLinkList>
            </section>
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