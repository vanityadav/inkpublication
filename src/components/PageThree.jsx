import publication from "../media/1e.jpg";

export default function PageThree({ inView }) {
  return (
    <>
      <div
        className="page-box-content"
        style={{
          transform: inView ? "none" : "translateY(200px)",
          opacity: inView ? 1 : 0,
          transition:
            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s,  color 0.5s",
        }}
      >
        <div className="publication">
          <h1>Publication Process</h1>
          <p className="text-box">
            At first author needs to specify their basic information according
            to their requirements.
          </p>
          <h2>Requirement Specification</h2>
          <ul>
            <li> Indexing Requirement </li>
            <li> Journal’s Scope</li>
            <li> Expected time of publication </li>
            <li> Maximum budget for publication charges </li>
            <li> Any other specific requirement</li>
            <li> Article file </li>
          </ul>
          <h2>Final Procedure</h2>
          <ul>
            <li>
              We provide a list of available journals matching to author’s
              requirements.
            </li>
            <li>
              Author need to make a selection from the given list of journals
              and ensure by visiting their website and check the authenticity of
              journals by themselves.
            </li>
            <li>
              Then the article will be processed with selected journal and we
              ensure about the publication process with target journal.
            </li>
            <li>
              After getting the acceptance author needs to pay the charges as
              per our terms.
            </li>
            <li>
              Once all formalities completes then the target journals publishes
              the work and we inform the author about their publication.
            </li>
          </ul>
        </div>
        <div className="box-container">
          <img loading="lazy" src={publication} alt="rs" />
          <div className="box-info">
            <h2> Publication Process</h2>
            <p>
              At first author needs to specify their basic information according
              to their requirements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
