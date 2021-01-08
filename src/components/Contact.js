import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import LanguageIcon from '@material-ui/icons/Language';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import TwitterIcon from '@material-ui/icons/Twitter';

const Contact = () => {
  return (
    <div className="container mt-3">         
      <div className="row">
        <div className="col-sm-12 col-md-6 d-flex justify-content-center">
          <img className="img-fluid" src='/img/laptopContact.png' alt=""/>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="card navCards">
            <div className="card-body">
              <h3 className="card-title ">Contact</h3>
              <h6 className="card-subtitle mb-4">Ask us when you need something</h6>
              <section className="d-flex align-items-center mb-3">
                <EmailIcon/> <span className="ml-2">contact@bookfinder.com</span>
              </section>
              <section className="d-flex align-items-center mb-3">
                <PhoneIcon/> <span className="ml-2">604 738 283</span>
              </section>
              <section className="d-flex align-items-center mb-3">
                <PlaceIcon/> <span className="ml-2">Łódź</span>
              </section>
              <section className="d-flex align-items-center mb-3">
                <LanguageIcon/> <span className="ml-2">bookfinder.com</span>
              </section>
              <section className="d-flex align-items-center mb-3">
                <FacebookIcon/> <span className="ml-2">@bookfinder</span>
              </section>
              <section className="d-flex align-items-center mb-3">
                <TwitterIcon/> <span className="ml-2">@bookfinder</span>
              </section>
              <section className="d-flex align-items-center">
                <YouTubeIcon/> <span className="ml-2">@bookfinder</span>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;