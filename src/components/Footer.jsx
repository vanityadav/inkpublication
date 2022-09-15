import { useState } from "react";
import facebook from "../media/facebook.svg";
import twitter from "../media/twitter.svg";
import instagram from "../media/instagram.svg";
import uparrow from "../media/uparrow.svg";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "./Contact";

export default function Footer() {
  const items = ["Terms & Policies", "Support"];

  return (
    <>
      <footer>
        <Contact />
        <div className="footer">
          <span>&copy; 2022 I Publication . All rights reserved </span>
        </div>
      </footer>
    </>
  );
}
