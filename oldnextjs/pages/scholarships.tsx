import { PageHead, PageHeader, PageWrap } from "./head";
import PageStyles from "./styles";

const scholarships = () => {
  return (
    <div style={PageStyles.outlineWhite}>
      <style jsx>{`
        @media screen and (min-aspect-ratio: 1/1) {
            .image_size {
                width: 30% !important
            }
      `}</style>
      <p>
        <strong>Scholarships</strong>
        <br />
        <br /> A record 31 scholarships of $500.00 each were awarded to
        deserving HB collegians during Fall, winter, and Spring Quarters for
        2017 – 2018. An additional FIVE $100.00 gift certificates for the UW
        Bookstore were distributed in a random drawing at a chapter meeting.
      </p>

      <div style={{ display: "block", textAlign: "center" }}>
        <a href="/pictures/recipients.jpg">
          <img
            className="text-center image_size"
            src="/pictures/recipients.jpg"
            alt="recipients holding their award"
            style={{ width: "100%" }}
          />
        </a>
        <div className="caption text-center">
          <p>Kris, Gretchen, and Betty with recipients.</p>
        </div>
      </div>
    </div>
  );
};

const scholarshipsExport = () => {
  return <PageWrap Body={scholarships} Title="Scholarships" />;
};

export default scholarshipsExport;
