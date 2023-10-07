"use client";
import React from "react";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function App() {
  return (
    <div
      bgColor="light"
      className="text-center text-lg-start text-muted  bottom-0 footer "
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 sectionFooter">
        <div className="me-5 d-none d-lg-block"></div>

        <div>
          <a href="" className="me-4 text-reset">
            <i color="secondary" fab className="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <i color="secondary" fab className="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <i color="secondary" fab className="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <i color="secondary" fab className="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <i color="secondary" fab className="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <i color="secondary" fab className="github" />
          </a>
        </div>
      </section>

      <div className="text-center pt-4 pb-3">
        © 2023 {"  "}
        <a className="text-reset " href="https://mdbootstrap.com/">
          Chantal stanzione
        </a>
      </div>
    </div>
  );
}
