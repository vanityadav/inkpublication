import React from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Body() {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView1 = useInView(ref1, { once: true });
  return (
    <div className="main-body">
      <PageOne />
      <hr className="line" ref={ref} />
      <PageTwo inView={isInView} />
      <hr className="line" ref={ref1} />
      <PageThree inView={isInView1} />
      <hr className="line" />
    </div>
  );
}
