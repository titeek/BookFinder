import React from 'react';
import {Link} from 'react-router-dom';

function About() {
  return (
    <div className="container mt-3">         
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="card navCards ">
            <div className="card-body">
              <h3 className="card-title ">About Us</h3>
              <h6 className="card-subtitle mb-4">Book experts & Book lovers</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis asperiores, sunt, in illo laborum molestias quisquam ipsum soluta quo dolore quae repellat quod commodi distinctio est perferendis totam odio. Molestiae nobis vitae ipsum aliquid, natus temporibus, beatae quas rem ratione molestias nihil odio iure hic exercitationem consequuntur commodi maiores iusto ipsa veritatis est! Error, soluta. Similique, assumenda quos? Fugit voluptates natus ducimus saepe aperiam placeat, eius dolores, sit laudantium numquam explicabo quos asperiores officia quis rem pariatur ipsam cupiditate ea!</p>
              <Link to="/" className="nav-item nav-link font-weight-bold mt-5 d-flex justify-content-end">
                <button className="btn p-2 mr-2 mb-2 navCards_button">Check out now!</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 d-flex justify-content-center">
          <img className="h-75" src='/img/bookAbout.png' alt=""/>
        </div>
      </div>
    </div>
  );
}

export default About;