import { useEffect, useRef } from "react";

export default function Dialog({
  journal,
  showModal,
  setOpenDialog,
  handleNext,
  handlePrevious,
}) {
  const dialogRef = useRef();

  useEffect(() => {
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
          //   className={
          //     prevbuttonStatus === "prev-disabled"
          //       ? "button-disabled"
          //       : "journal-dialog-buttons"
          //   }
          onClick={handlePrevious}
        >
          Previous
          {/* {prevNavigateTo} */}
        </button>
        <button className="journal-dialog-buttons" onClick={handleClose}>
          Close
        </button>
        <button
          //   className={
          //     nextbuttonStatus === "next-disabled"
          //       ? "button-disabled"
          //       : "journal-dialog-buttons"
          //   }
          onClick={handleNext}
        >
          Next
          {/* {nextNavigateTo} */}
        </button>
      </div>
    </dialog>
  );
}
