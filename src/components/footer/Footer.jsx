"use client";
import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function App() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted  bottom-0 footer"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 sectionFooter">
        <div className="me-5 d-none d-lg-block"></div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <div className="text-center p-4">
        © 2023 {"  "}
        <a className="text-reset " href="https://mdbootstrap.com/">
          Chantal stanzione
        </a>
      </div>
    </MDBFooter>
  );
}
