import React from "react";
import guidance from "../media/rsedited.jpg";
import research from "../media/rs1edited.jpg";

export default function PageTwo({ inView }) {
  return (
    <div
      className="research"
      style={{
        transform: inView ? "none" : "translateY(200px)",
        opacity: inView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="guidance">
        <img loading="lazy" src={guidance} alt="rs" />
        <div className="research-info">
          <h2> Research Guidance</h2>
          <p>
            Research guidance is a group of professionals who are engaged in
            delivering end-to-end research consultation services for research
            scholars..
          </p>
        </div>
      </div>
      <div className="publication">
        <img loading="lazy" src={research} alt="rs" />
        <div className="research-info">
          <h2> Research Publication</h2>
          <p>
            Publications make scientific information publicly available, and
            allow the rest of the academic audience to evaluate the quality of
            the research.
          </p>
        </div>
      </div>
      <div className="publication">
        <img loading="lazy" src={research} alt="rs" />
        <div className="research-info">
          <h2>Conference</h2>
          <p>
            Discover and register for NN Publications events including virtual,
            hybrid conference proceedings.
          </p>
        </div>
      </div>
    </div>
  );
}
