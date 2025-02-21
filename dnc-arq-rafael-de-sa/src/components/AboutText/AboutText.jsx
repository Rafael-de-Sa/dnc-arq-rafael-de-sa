import "./AboutText.css";

function AboutText(props) {
  return (
    <div className="container">
      <div className="text-section d-flex">
        <div className="text-section-text ">
          <h2>ABC Ser</h2>
        </div>
        <div className="text-section-text ">
          <p className="primary-color">Primeira linha</p>
          <p>Segunda linha</p>
          <p>Terceira linha</p>
        </div>
      </div>
    </div>
  );
}

export default AboutText;
