import { PageHead, PageHeader, PageWrap } from "./head";
import PageStyles from "./styles";

import React from 'react';

const BookReviews = () => {
  return (
    <div style={PageStyles.outlineWhite}>
      <p>
        <strong>Book Reviews</strong>
        <br />
        Our Book Reviews are a trending topic! They are usually held at Sunset
        West Party Room 10:00AM - 12:30PM two to four times per year. We focus
        on local author presendations. In May 2018, Renee Patrick (husband and
        wife authors Rosemarie and Vince Keenen) presented "Design For Dying" -
        a 1930's Hollywood in the Golden Age murder mystery. This event was held
        at Ray's Boathouse in a private room.
      </p>
      <hr />
      <p>
        Many of our reviews are lively discussions facilitated by Chandler
        Clifton, and a no host lunch at Ray's Boathouse follows the reviews. We
        hope to have our next event in the near future. Details to come. JOIN
        us! Make a book recommendation! Gently used and new books are sold at
        these events to raise funds for even more good work by EBEF.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="thumbnail">
            <a href="/pictures/conference.jpg">
              <img
                src="/pictures/conference.jpg"
                alt="picture of book reviews"
                style={{ width: "100%" }}
              />
            </a>
            <div className="caption">
              <p>Placeholder for images of past book reviews</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="thumbnail">
            <a href="/pictures/conference.jpg">
              <img
                src="/pictures/conference.jpg"
                alt="picture of book reviews"
                style={{ width: "100%" }}
              />
            </a>
            <div className="caption">
              <p>Placeholder for images of past book reviews</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="thumbnail">
            <a href="/pictures/conference.jpg">
              <img
                src="/pictures/conference.jpg"
                alt="picture of book reviews"
                style={{ width: "100%" }}
              />
            </a>
            <div className="caption">
              <p>Placeholder for images of past book reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookReviewsExport = () => {
  return <PageWrap Body={BookReviews} Title="Book Reviews" />;
};

export default BookReviewsExport;
