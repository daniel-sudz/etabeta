import { PageHead, PageHeader, PageWrap } from "./head";
import PageStyles from "./styles";

import React from 'react';


const History = () => {
  return (
    <>
      <div style={PageStyles.outlineWhite}>
        <p>
          <strong>Foundation</strong>
          <br />
          <br />
          <img
            src="/pictures/logo.png"
            alt="company logo"
            className="img-thumbnail float-right"
            style={PageStyles.padLogo}
          />
          It was 2006. Many local alumnae had long sought a way to donate money
          which would be tax deductible and would benefit area Phi Mus and our
          Chapter House. With no active chapter at that time, many of those same
          local alumnae felt an urgent need to support and protect the Eta Beta
          Student Residence property. They viewed that property as essential to
          Phi Mu’s future hopes for a return to the University of Washington
          campus. They wanted to support and promote educational opportunities
          and activities for area phi Mus – joining the efforts to keep our
          alumnae group engages and vibrant.
        </p>
        <hr />
        <p>
          Out of these hopes and desires, the Eta Beta Education Foundation was
          incorporated on October 9. 2006. At that time we though it would allow
          us to practice what it would be like to be mentors and alumnae
          supporting a new chapter some time in the future.
        </p>
        <hr />
        <p>
          Through member donations, we’ve funded scholarships for residents at
          the ta Beta Student Residence. Gifts of books and study support
          created positive referral and a “buzz” about the benefits of renting
          there and contributed to the success of securing that property.
        </p>
      </div>
      <br />
      <div style={PageStyles.outlineWhite}>
        <strong>Mission Statement</strong>
        <br />
        <br /> The stated purpose listed in the EBEF articles of Incorporation
        back in 2006 affirmed Alumnae hopes and desires.
        <ul>
          <li>To provide scholarships to residents of the Eta Beta House</li>
          <li>
            To provide funding for educational and enrichmenst programs to be
            presented at the house.
          </li>
          <li>
            To provide Funding for attendance at outside educational events for
            students, alumnae, and friends.
          </li>
          <li>
            To provide funding for attendance at educational Phi Mu events.
          </li>
          <li>
            To provide funding for enhancing meeting and study spaces at the Eta
            Beta Student Residence.
          </li>
        </ul>
        <hr />
        <p>
          The foundation Board reaffirms those purposes NOW. We’re committed to
          supporting the success of a vibrant new Chapter and to continued and
          expanded support of local alumnae.
        </p>
        <hr />
        <p>
          THE TIME IS NOW, and it’s the best of times to join the ETA BETA
          EDUCATION FOUNDATION!
        </p>
      </div>
    </>
  );
};

const HistoryExport = () => {
    return (
        <PageWrap Body={History} Title="History" />
    )
}

export default HistoryExport;
