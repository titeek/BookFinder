import React from 'react';
import {Link} from 'react-router-dom';
import Loader from 'react-loader-spinner'

import olApi from '../olApi';
import Character from './Character';
import CharacterList from './CharakterList';
import Place from './Place';
import PlaceList from './PlaceList';
import WebLink from './WebLink';
import WebLinkList from './WebLinkList';
import Tag from './Tag';
import TagList from './TagList';


class BookDetail extends React.Component {
  state = {book: {}, photo: 0, author: {}};

  componentDidMount() {
    olApi.get(`${this.props.match.params.key}/${this.props.match.params.id}.json`)
    .then((response) => {
      this.setState({book: response.data});
      console.log(response.data);
      olApi.get(`${response.data.authors[0].author.key}.json`)
        .then((response) => {
          this.setState({author: response.data});
        });
    });
  }

  render() {

    let element; 
    const numberToSlice = 20;
    const numberOfTags = 10;
    let characterList; 
    let placeList;  
    let webLinkList;
    let tagList;
    let descriptionString = "";
    let photoString = "";

    if(!this.state.author.name) {
      element = 
      <div className="d-flex justify-content-center mt-5">
        <Loader type="ThreeDots" color="#ffb000" height={50} width={120}timeout={999999} />
      </div>
    } else {
      photoString = this.state.book.covers ? this.state.book.covers[0] : ""
      
      this.state.book.subject_people ?
      characterList = this.state.book.subject_people.slice(0, numberToSlice).map(character => (
        <Character key={character} character={character}/>
      )) : characterList = <Character key="nokey" character="There is no informations"/>;

      this.state.book.subject_places ?
      placeList = this.state.book.subject_places.slice(0, numberToSlice).map(place => (
        <Place key={place} place={place}/>
      )) : placeList = <Place key="nokey" place="There is no informations"/>;

      this.state.book.links ?
      webLinkList = this.state.book.links.slice(0, numberToSlice).map(link => (
        <WebLink key={link.url} link={link.url}/>
      )) : webLinkList = <WebLink key="nokey" link="There is no informations"/>;

      this.state.book.subjects ?
      tagList = this.state.book.subjects.slice(0, numberOfTags).map(tag => (
        <Tag key={tag} tag={tag}/>
      )) : tagList = <Tag key="nokey" tag="There is no informations"/>;

      if(this.state.book.description) {
        if(this.state.book.description.value){
          if(this.state.book.description.value.includes('([source]')){
            descriptionString = this.state.book.description.value.substring(0, this.state.book.description.value.indexOf('([source]'));
          } else {
            descriptionString = this.state.book.description.value;
          }
        } else {
          if(this.state.book.description.includes('([source]')){
            descriptionString = this.state.book.description.substring(0, this.state.book.description.indexOf('([source]'));
          } else {
            descriptionString = this.state.book.description;
          }
        }
      } 
      element = 
      <div className="row mt-3">
          <div className="col-4">
            <img src={`http://covers.openlibrary.org/b/id/${photoString}-L.jpg`} alt="" className="img-fluid"/>
            <h5>Author</h5>
            <Link to={`/author${this.state.book.authors[0].author.key}`}><p>{this.state.author.name}</p></Link>
            <h5>Publish year</h5>
            <p>{this.props.match.params.publishYear}</p>
            <h5>Last modification</h5>
            <p>{this.state.book.last_modified.value.slice(0,10)}</p>
            <h5>Tags</h5>
            <TagList list={tagList}></TagList>
          </div>
          <div className="col-8">
            <h1>{this.state.book.title}</h1>
            <p>{descriptionString}</p>
            <h4>Characters</h4>
            <CharacterList list={characterList}></CharacterList>
            <h4>Places</h4>
            <PlaceList list={placeList}></PlaceList>
            <h4>Links</h4>
            <WebLinkList list={webLinkList}></WebLinkList>
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

export default BookDetail;