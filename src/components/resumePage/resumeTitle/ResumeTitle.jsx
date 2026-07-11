import "./resume-title.css";

const contactInfo = [
  {
    id: 1,
    label: "Email",
    info: "lescri.garcia@gmail.com",
  },
  {
    id: 2,
    label: "Phone",
    info: "+52 5547867015",
  },
  {
    id: 3,
    label: "Location",
    info: "Mexico",
  },
  {
    id: 4,
    label: "LinkedIn",
    info: "/in/leslie-garcia-garcia",
  },
  {
    id: 5,
    label: "GitHub",
    info: "/lesgargar",
  },
];

export default function ResumeTitle() {
  return (
    <>
      <div className="name">
        <h6 className="title">Leslie Garcia</h6> <div className="subtitle">Fullstack developer</div>
      </div>
      <div className="contact-info">
        {contactInfo.map((item) => (
          <div className="info-item" key={item.id}>
            <h6 className="info-label">{item.label} : </h6>
            <p className="info-detail">{item.info}</p>
          </div>
        ))}
      </div>
    </>
  );
}
