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
            All author needs to get their research published with a tight
            schedule with minimal budget in indexed and reputed journal. Many
            institutions require different journals indexed in different
            databases. So for all these issue we come forward to assist in best
            way we can
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
