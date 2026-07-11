import "./languajes.css";

export default function Languajes() {
  return (
    <div className="languajes-box">
      <h3 className="title">Languajes</h3>
      <div className="languajes">
        <div className="languajes-list">
          <div className="lang-item">
            <div className="lang">Spanish</div>
            <div>Native</div>
          </div>
          <div className="lang-item">
            <div className="lang">English</div>
            <div>Advanced</div>
          </div>
        </div>
      </div>
    </div>
  );
}
