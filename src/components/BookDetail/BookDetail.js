import React from 'react';
import {Link} from 'react-router-dom';
import PeopleIcon from '@material-ui/icons/People';
import PlaceIcon from '@material-ui/icons/Place';
import LinkIcon from '@material-ui/icons/Link';

import CharacterList from '../Character/CharakterList';
import PlaceList from '../Place/PlaceList';
import WebLinkList from '../WebLink/WebLinkList';
import TagList from '../Tag/TagList';

import '../../scss/dist/book.css';

const BookDetail = (props) => {
  
  let element;  
  let characterElement;
  let placeElement;  
  let webLinkElement;
  let tagElement;
  let descriptionString = "";
  let photoString = "";

  photoString = props.book.covers ? "http://covers.openlibrary.org/b/id/" + props.book.covers[0] + "-L.jpg" : "http://via.placeholder.com/300x400";
    
  props.book.subject_people ?
    characterElement = <CharacterList list={props.book.subject_people}></CharacterList>
    : characterElement = <p>There is no informations</p>
            
  props.book.subject_places ?
    placeElement = <PlaceList list={props.book.subject_places}></PlaceList>
    : placeElement = <p>There is no informations</p>

  props.book.links ?
    webLinkElement = <WebLinkList list={props.book.links}></WebLinkList>
    : webLinkElement = <p>There is no informations</p>

  props.book.subjects ?
    tagElement = <TagList list={props.book.subjects}></TagList>
    : tagElement = <p>There is no informations</p>

    if(props.book.description) {
    if(props.book.description.value){
        if(props.book.description.value.includes('([source]')){
          descriptionString = props.book.description.value.substring(0, props.book.description.value.indexOf('([source]'));
      } else if (props.book.description.value.includes('---')){
          descriptionString = props.book.description.value.substring(0, props.book.description.value.indexOf('---'));
      } else {
          descriptionString = props.book.description.value;
        }
      } else {
        if(props.book.description.includes('([source]')){
          descriptionString = props.book.description.substring(0, props.book.description.indexOf('([source]'));
        } else if(props.book.description.includes('---')){
          descriptionString = props.book.description.substring(0, props.book.description.indexOf('---'));
        }else {
          descriptionString = props.book.description;
      }
    }
    } else {
      descriptionString = "There is no more informations";
    }
    element = 
    <div className="row mt-3 bookDetails">
        <div className="col-sm-12 col-md-4 col-lg-3">
        <img src={photoString} alt="" className="img-fluid"/>
        <div className="mt-3 mb-3 bookDetails_authorSection">
            <Link to={`/author${props.book.authors[0].author.key}`}><h5 className="font-weight-bold">Author</h5><p>{props.author.name}</p></Link>
            <h5 className="font-weight-bold">Publish year</h5>
            <p>{props.publishYear}</p>
            <h5 className="font-weight-bold">Last modification</h5>
          <p>{props.book.last_modified.value.slice(0,10)}</p>
          <h5 className="font-weight-bold">Tags</h5>
          {tagElement}
          </div>
        </div>
      <div className="col-sm-12 col-md-8 col-lg-9 bookDetails_infoSection">
          <section className="bookDetails_infoSectionSingle">
          <h2 className="font-weight-bold">{props.book.title}</h2>
            <p>{descriptionString}</p>
          </section>
          <section className="mt-3 bookDetails_infoSectionSingle">
            <section className="d-flex align-items-center mb-3">
              <PeopleIcon/><h4 className="font-weight-bold ml-2 m-0">Characters</h4>
            </section>
          {characterElement}
          </section>
          <section className="mt-3 bookDetails_infoSectionSingle">
          <section className="d-flex align-items-center mb-3">
            <PlaceIcon/><h4 className="font-weight-bold ml-2 m-0">Places</h4>
          </section>
          {placeElement}
          </section>
          <section className=" mt-3 bookDetails_infoSectionSingle">
            <section className="d-flex align-items-center mb-3">
            <LinkIcon/><h4 className="font-weight-bold ml-2 m-0">Links</h4>
          </section>
          {webLinkElement}
        </section>
      </div>
  </div>

  return(
    <div className="container">
      {element}
    </div>
  );
}

export default BookDetail;