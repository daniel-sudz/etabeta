import Head from "next/head";
import React, { FunctionComponent } from "react";
import Link from "next/link";
import History from "./history";
import PageStyles from "./styles";

type PageHeadProps = {
  description: string;
  title: string;
};

const PageHead: FunctionComponent<PageHeadProps> = ({ description, title }) => {
  return (
    <div>
      <style global jsx>{`
        body {
            background-color: rgb(245, 224, 227) !important;
        }
        .navbar-light .navbar-nav .nav-link {
            color: #ffffffd3 !important;
        }
        .navbar-light .navbar-brand {
            color: #ffffffd3 !important;
        }
      `}</style>

      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
    </div>
  );
};

const PageHeader: FunctionComponent<{}> = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#D71361" }}
      >
        <a className="navbar-brand" href="./index.html#">
          Eta Beta Foundation
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="./calendar.html#">
                Calendar
              </a>
            </li>
            <li className="nav-item">
              <Link href="/history">
                <a className="nav-link">History</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/donations">
                <a className="nav-link">Donations</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/reviews">
                <a className="nav-link">Book Reviews</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/scholarships">
                <a className="nav-link">Scholarships</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/funding">
                <a className="nav-link">Funding</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const PageWrap: FunctionComponent<{
  Body: FunctionComponent;
  Title: string;
}> = ({ Body, Title }) => {
  return (
    <>
      <PageHead description="test" title="test" />
      <PageHeader />
      <div className="container-fluid" style={{ maxWidth: "95%" }}>
        <h3 style={PageStyles.topBar}> {Title} </h3>
        <Body />
      </div>
    </>
  );
};

export { PageHead, PageHeader, PageWrap };
