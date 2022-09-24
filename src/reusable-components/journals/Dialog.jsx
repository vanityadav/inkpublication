import { useEffect, useRef, useState } from "react";

export default function Dialog({
  journal,
  showModal,
  setOpenDialog,
  handleNext,
  handlePrevious,
  prevbuttonStatus,
  nextbuttonStatus,
}) {
  const dialogRef = useRef();
  const [eventListener, setEventListener] = useState();

  useEffect(() => {
    if (showModal) setEventListener(true);
    if (eventListener) {
      function handleMouseOut(event) {
        if (event.target === dialogRef.current) setOpenDialog(false);
        console.log(event.target);
      }
      document.addEventListener("click", handleMouseOut);
      return () => {
        document.removeEventListener("click", handleMouseOut);
      };
    }
  });

  function handleClose() {
    setOpenDialog(false);
  }

  return (
    <div className="journal-background" ref={dialogRef}>
      <div className="journal-popup">
        <div className="dialog-journal-info">
          <p className="journal-title"> {journal.title}</p>
          <p>ISSN :{journal.issn}</p>
          <p>Subject Area: {journal.subjectArea}</p>
        </div>
        <div className="journal-dialog-buttons-grp">
          <button
            className={
              !prevbuttonStatus ? "button-disabled" : "journal-dialog-buttons"
            }
            onClick={handlePrevious}
          >
            Previous {prevbuttonStatus ? "Journal" : "Page"}
          </button>
          <button className="journal-dialog-buttons" onClick={handleClose}>
            Close
          </button>
          <button
            className={
              !nextbuttonStatus ? "button-disabled" : "journal-dialog-buttons"
            }
            onClick={handleNext}
          >
            Next {nextbuttonStatus ? "Journal" : "Page"}
          </button>
        </div>
      </div>
    </div>
  );
}
