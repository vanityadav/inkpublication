import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import home from "../media/Home.jpg";
import CountUp from "react-countup";

export default function PageOne() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="about-us" ref={ref}>
        <div className="heading">
          <h1
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            Your gateway to <br />
            world-class <br />
            research journals
          </h1>
        </div>
        <div
          className="content-info"
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          }}
        >
          <p>
            I Publication Provides a wide range of publication and consultation
            services for various journals indexed in Scopus, web of science,
            PubMed, Google Scholar etc. We work as an intermediator for
            publication between the author and the target journal. Nowadays it
            is a very hectic work to select respected journals with specific
            indexing and the journal that follows best practices for research
            publication.
          </p>
        </div>
      </div>
      <div className="home-items">
        <div className="counters">
          <div
            className="countries"
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
            }}
          >
            <CountUp
              className="big-numbers"
              start={0}
              end={180}
              duration={3}
              delay={1}
            />
            <span>Countries</span>
          </div>
          <div
            className="customers"
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
            }}
          >
            <CountUp
              className="big-numbers"
              start={0}
              end={10000}
              duration={3}
              delay={1}
            />
            <span>Customers</span>
          </div>
        </div>
        <div
          className="img-container"
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2.5s",
          }}
        >
          <img className="home-image" src={home} alt="" />
        </div>
      </div>
    </>
  );
}
