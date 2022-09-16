import { useRef, useEffect } from "react";

export default function Dialog() {
  const dialogRef = useRef();

  return (
    <div>
      <button
        onClick={() => {
          dialogRef.current.showModal();
        }}
      >
        Show Hello
      </button>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          dialogRef.current.close();
        }}
      >
        Close
      </button>
      <dialog ref={dialogRef} className="modal">
        <div>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </div>
      </dialog>
    </div>
  );
}
