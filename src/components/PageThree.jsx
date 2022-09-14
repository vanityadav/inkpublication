import React from "react";
import payment from "../media/4e.jpg";
import publication from "../media/1e.jpg";

export default function PageThree({ inView }) {
  return (
    <>
      <div
        className="process-page"
        style={{
          transform: inView ? "none" : "translateY(200px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="research-heading">
          <h1>How it Works</h1>
          <p className="text-box">
            We are unwavering in our mission and act with urgency to make all
            science openly available. Our role is to provide the world’s
            scientists with the best, the fastest, and the most efficient
            publishing experience.
          </p>
          <ul>
            <li> Speed </li>
            <li> Quality</li>
            <li> Innovation </li>
            <li> Collaboration </li>
          </ul>
          <button className="more-links">View More &#8663;</button>
        </div>
        <div className="guidance">
          <img loading="lazy" src={publication} alt="rs" />
          <div className="research-info">
            <h2> Publication Process</h2>
            <p>
              Choose the most suitable research methodology based on the
              argument of your research.
            </p>
            <button className="view-more">View More</button>
          </div>
        </div>
        <div className="publication">
          <img loading="lazy" src={payment} alt="rs" />
          <div className="research-info">
            <h2>Payment Process</h2>
            <p>
              Help the writing and formatting of the chapters with the correct
              format, style, and flow of the chapters
            </p>
            <button className="view-more">Check Plans</button>
          </div>
        </div>
      </div>
    </>
  );
}
