import React from "react";

import SendMail from "./SendMail";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Contact({ theme }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div className="contact-page" ref={ref}>
        <h1
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          Get in touch <br />
          with us
        </h1>

        <div
          className="contact-contents"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div>
            <p>Ink Publisher</p>
            <p>274, Geo-Building, Gurgoan 122001, India</p>

            <div className="contact-info-below-map">
              <div>
                <p>Phone Number</p>
                <p>+91 2504521534</p>
              </div>
              <div>
                <p>Email</p>
                <p>inkpublication@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <SendMail />
          </div>
        </div>
      </div>
    </>
  );
}
