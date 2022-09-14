import React, { useEffect, useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import success from "../media/success.svg";
import error from "../media/error.svg";

export default function SendMail() {
  const form = useRef();
  const [mailStatus, setMailStatus] = useState("");
  const animation = {
    initial: { x: "10vw", opacity: 0 },
    animate: { x: "0", opacity: 1 },
    exit: { x: "10vw", opacity: 0 },
    transition: { type: "spring", stiffness: 50 },
  };

  useEffect(() => {
    setTimeout(() => {
      setMailStatus("");
    }, 4000);
  }, [mailStatus]);

  const sendEmail = (e) => {
    e.preventDefault();

    form
      .sendForm(
        "service_a8skarf",
        "template_u1w7jvl",
        form.current,
        "dt-FkFxSiArX8tYLI"
      )
      .then(
        (result) => {
          e.target.reset();
          setMailStatus("sent");
        },
        (error) => {
          setMailStatus("failed");
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="mail-form">
        <input required type="text" name="user_name" placeholder="Your Name" />

        <input
          required
          type="email"
          name="user_email"
          placeholder="Your Email"
        />

        <textarea
          cols="40"
          rows="5"
          required
          type="text"
          name="message"
          placeholder="Message"
        />
        <input type="submit" value="Shoot" />
      </form>

      <AnimatePresence>
        {mailStatus === "sent" && (
          <>
            <motion.div {...animation} className="mail-status">
              <div>
                <img src={success} alt="sent" />
              </div>
              <div>
                <p>We have got your message</p>
                <p>We will get back to you shortly</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mailStatus === "failed" && (
          <motion.div {...animation} className="mail-status">
            <div>
              <img src={error} alt="failed" />
            </div>
            <div>
              <p>Error : Service Not Working</p>
              <p>Kindly drop your message to - vanityadav08@gmail.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
