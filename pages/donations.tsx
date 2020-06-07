import { PageHead, PageHeader, PageWrap } from "./head";
import PageStyles from "./styles";

const Donations = () => {
  return (
    <>
      <div style={PageStyles.outlineWhite}>
        <p>
          <strong>Donation Information</strong>
          <br />
          <br />
          <img
            src="/pictures/logo.png"
            alt="company logo"
            className="img-thumbnail float-right"
            style={PageStyles.padLogo}
          />
          Eta Beta Education Foundation is a Public 501 (c) (3) Charity. Its
          formation was for 'charitable and educational purposes' in the State
          of Washington. The purposes listed in the Articles of Incorporation
          include:
        </p>
        <hr />
        <p>
          1. Provide scholorships for students attending the University of
          Washington.
          <br />
          2. Provide funding for educational and enrichment programs to U.W
          students, their families, and friends.
          <br />
          3. Provide funding for creating or enhancing meeting and study spaces
          at the Eeta Beta Student Residence.
        </p>
        <hr />
        <p>
          <strong> Organization Information </strong>
          <br /> Eta Beta Education Foundation
          <br /> P.O Box 313
          <br /> Bellevue, Washington 98009-0313
          <br /> EIN# 20-5929961
          <br /> President, Debbie Fox <br />
          <a href="tel:425-277-4314">425-277-4314</a> <br />
          <a href="mailto:debfox1@comcast.net">debfox1@comcast.net</a>
          <br /> Treasurer, Marilyn Pendersen <br />
          <a href="tel:206-909-4226">206-909-4226</a> <br />
          <a href="mailto:casahaos@yahoo.com">casahaos@yahoo.com</a>
        </p>
        <hr />
        <p>
          We are requesting cash and/or in-kind donations. In-kind donations i.e
          gift cards, products, services will be utilized to raise funds during
          our annual fundraiser event, local Author book review events, various
          educational meetings, and annual Board meetings in October. Please
          know specific mention of your support will be made at each event where
          your generous donation may be offered as well as inclusion in our
          annual Foundation Newletter update.
          <br /> <br /> We THANK YOU for your consideration and any support you
          can give to EBEF.
        </p>
        <hr />
        <p style={{ textAlign: "center" }}>
          Your Gift is tax-deductible as allowed by law.
        </p>
      </div>
      <br />
      <p>
        <div style={PageStyles.outlineWhite}>
          <strong>Other ways to contribute</strong>
          <br />
          <br />
          If you would like to support the Eta Beta Education Foundation through
          other ways you can checkout{" "}
          <a href="./funding.html">the funding page</a>
        </div>
      </p>
    </>
  );
};

const DonationsExport = () => {
  return <PageWrap Body={Donations} Title="Donations" />;
};

export default DonationsExport;
