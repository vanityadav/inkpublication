import React from "react";
import { useRef } from "react";
import call from "../media/call.svg";
import mail from "../media/mail.svg";
import facebook from "../media/facebook.svg";
import twitter from "../media/twitter.svg";
import instagram from "../media/instagram.svg";
import { useInView } from "framer-motion";
import { NavLink } from "react-router-dom";
import support from "../media/support.svg";
import terms from "../media/terms.svg";

export default function Contact({ theme }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div className="contact-page" ref={ref}>
        <div
          className="contact-info"
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div className="contact-details">
            <h1>Contact Us</h1>
            <div className="contact-buttons">
              <a href="tel:+91 8130914281 ">
                <button>
                  <img src={call} alt="c" />
                  Call Us
                </button>
              </a>
              <a href="mailto:article@ipubservice.in">
                <button>
                  <img src={mail} alt="c" />
                  Email Us
                </button>
              </a>
            </div>
          </div>

          <div className="contact-details">
            <h1>Help &amp; Support</h1>
            <div className="contact-buttons">
              <NavLink to="/terms">
                <button>
                  <img src={terms} alt="c" />
                  Terms &amp; Policies
                </button>
              </NavLink>
              <NavLink to="/support">
                <button>
                  <img src={support} alt="c" />
                  Guidance
                </button>
              </NavLink>
            </div>
          </div>

          <div className="socials-contact">
            <h1>Follow Us</h1>
            <div className="social-icons-links">
              <a href="https://www.instagram.com/m_asoo_m.123/">
                <button>
                  <img src={instagram} alt="s" />
                </button>
              </a>
              <a href="https://www.facebook.com/I-Publication-107852172064256/?ref=pages_you_manage">
                <button>
                  <img src={facebook} alt="s" />
                </button>
              </a>
              <a href="https://twitter.com/IPUBLICATION2">
                <button>
                  <img src={twitter} alt="s" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
