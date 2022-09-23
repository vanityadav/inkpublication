import { useEffect, useRef } from "react";

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

  useEffect(() => {
    console.log(prevbuttonStatus, nextbuttonStatus);
    if (showModal) dialogRef.current.showModal();
    console.log("Run Effect");
  }, []);

  function handleClose() {
    dialogRef.current.close();
    setOpenDialog(false);
  }

  return (
    <dialog ref={dialogRef} className="journal-popup">
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
    </dialog>
  );
}
