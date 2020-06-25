import { PageHead, PageHeader, PageWrap } from "./head";
import PageStyles from "./styles";

import React from "react";

const Index = () => {
  return (
    <div style={PageStyles.outlineWhite}>
      <style>
        {`
.carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}

.carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}`}
      </style>

      <div
        id="carousel"
        className="carousel slide text-center caurosel_styling_extra"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" className="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="img-fluid text-center"
              src="/pictures/meeting.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="img-fluid  text-center"
              src="/pictures/conference.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="img-fluid text-center"
              src="/pictures/auditorium.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel"
          role="button"
          data-slide="prev"
        >
          <span
            style={{
              color: "black !important",
            }}
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="container marketing outline_white">
        <div className="text-align: center;">
          <h2 className="featurette-heading; margin: 1;">
            Eta Beta Education Foundation
          </h2>
          <p className="lead">
            Eta Beta Education Foundation is 501(c)(3) corporation that raises
            money in order to fund scholorhips for college students living in
            the Eta Beta chapter house at the University of Washington. The
            foundation was started in 2006 when the chapter house was a student
            rooming house. Since 2015, the house has been renewed home of Phi Mu
            Fraternity. The members of the foundation are Phi Mu alumnae from
            around the country.
          </p>
        </div>
      </div>
    </div>
  );
};

const IndexExport = () => {
  return <PageWrap Body={Index} Title="Home" />;
};

export default IndexExport;
