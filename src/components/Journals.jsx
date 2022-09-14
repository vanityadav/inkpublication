import React, { useEffect, useRef, useState } from "react";

function NavbarDarkExample() {
  const [value, setValue] = useState();
  const optionsRef = useRef();

  function selectedvalue() {
    setValue(optionsRef.current.value);
  }

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export default NavbarDarkExample;
