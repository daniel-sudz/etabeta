import { PageHead, PageHeader, PageWrap } from "./head";
import PageStyles from "./styles";
import Link from "next/link";

const Funding = () => {
  return (
    <div style={PageStyles.outlineWhite}>
      <p>
        <strong>Events</strong>
        <br /> Another successful Wine Tasting Event was held August 2018.
        Sparkman Cellars presented 15 of their 25+ varietals. There were 60+
        attendees, 4 fabulous Baskets for the drawings and lots of food.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="thumbnail">
            <a href="/pictures/conference.jpg">
              <img
                src="/pictures/conference.jpg"
                alt="picture of wine testing event"
                style={{ width: "100%" }}
              />
            </a>
            <div className="caption">
              <p>Placeholder for images of past events</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="thumbnail">
            <a href="/pictures/conference.jpg">
              <img
                src="/pictures/conference.jpg"
                alt="picture of wine testing event"
                style={{ width: "100%" }}
              />
            </a>
            <div className="caption">
              <p>Placeholder for images of past events</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="thumbnail">
            <a href="/pictures/conference.jpg">
              <img
                src="/pictures/conference.jpg"
                alt="picture of wine testing event"
                style={{ width: "100%" }}
              />
            </a>
            <div className="caption">
              <p>Placeholder for images of past events</p>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <strong>Dollar tree</strong>
      <br />
      <p>
        A money Tree has been designed. A $25.00 donation will add your
        personalized leaf!
      </p>

      <div className="row">
        <div className="col-md-4 ">
          <div className="thumbnail">
            <a href="/pictures/money-tree-compress-dist.jpg">
              <img
                src="/pictures/money-tree-compress-dist.jpg"
                alt="picture of a money tree"
                style={{ width: "100%" }}
              />
            </a>
          </div>
        </div>
      </div>

      <hr />
      <strong>Amazon Smile</strong>
      <br />
      <br />

      <p>
        Amazon Smile Program:{" "}
        <a href="https://smile.amazon.com">smile.amazon.com</a> is another way
        to help EBEF. If you are online shopping, just use this site and 0.5% of
        your purchases will be donated to the eligible charity of your choice.
        Please select ETA BETA EDUCATION FOUNDATION!
      </p>

      <div className="row">
        <div className="col-md-4 ">
          <div className="thumbnail">
            <a href="https://smile.amazon.com">
              <img
                src="/pictures/amazon-smile-dist.jpg"
                alt="test"
                style={{ width: "100%" }}
              />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <strong>Membership</strong>
      <br />
      <p>
        We need NEW members to accomplish our goals. All donations are tax
        deductable. Please visit the <Link href="/donations"><a>donations</a></Link> page for more information on how you can contribute.
      </p>
    </div>
  );
};

const FundingExport = () => {
  return <PageWrap Body={Funding} Title="Funding" />;
};

export default FundingExport;
