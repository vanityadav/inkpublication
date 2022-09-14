import React from "react";
import Body from "./Body";
import Contact from "./Contact";

export default function Home({ theme }) {
  return (
    <>
      <Body />
      <Contact theme={theme} />
    </>
  );
}
