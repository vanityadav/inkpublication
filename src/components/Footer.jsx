import { useState } from "react";
import facebook from "../media/facebook.svg";
import twitter from "../media/twitter.svg";
import linkedin from "../media/linkedin.svg";
import uparrow from "../media/uparrow.svg";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const items = ["Privacy ", "Terms of Use ", "Support"];
  const services = [
    "Services ",
    "Conference ",
    "Research Publication",
    "Research Guidance",
  ];
  const help = [
    "Help & Support ",
    "Privacy Policy ",
    "Terms of Use",
    "Help Center",
  ];
  const contact = [
    "Contact Us",
    "+91 2504521534",
    "inkpublication@gmail.com",
    "274, Geo-Building, Gurgoan",
  ];
  const [footer, setFooter] = useState(false);

  function handleFooter() {
    setFooter(footer ? false : true);
  }
  return (
    <>
      <AnimatePresence>
        {footer && (
          <footer>
            <motion.div
              initial={{ y: "100px", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              exit={{ y: "100px", opacity: 0, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 50 }}
              className="flying-footer"
            >
              <div className="footer-info">
                {contact.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="footer-info">
                {services.map((service) => (
                  <span key={service}>{service}</span>
                ))}
              </div>
              <div className="footer-info">
                {help.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div onClick={handleFooter}>
                <img
                  className={footer ? "arrowdown" : ""}
                  src={uparrow}
                  alt="uparrow"
                />
              </div>
            </motion.div>
          </footer>
        )}
      </AnimatePresence>
      {!footer && (
        <footer>
          <div className="footer">
            <div>
              <span>&copy; 2022 Ink Production . All rights reserved </span>
            </div>
            <div className="footer-item">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="socials">
              <img src={linkedin} alt=""></img>
              <img src={facebook} alt=""></img>
              <img src={twitter} alt=""></img>
            </div>
            <div onClick={handleFooter}>
              <img
                className={footer ? "arrowdown" : ""}
                src={uparrow}
                alt="uparrow"
              />
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
