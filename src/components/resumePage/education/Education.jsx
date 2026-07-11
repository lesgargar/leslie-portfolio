import "./education.css";

const education = [
  {
    id: 1,
    title: "Fullstack Development Certificate",
    school: "4Geeks Academy",
    dates: "Jun 2025 - Sep 2025",
  },
  {
    id: 2,
    title: "MERN Fullstack development Certificate",
    school: "Iron Hack",
    dates: "Oct 2022 - Dec 2022",
  },
  {
    id: 3,
    title: "Bachelor of Business Administration",
    school: "Humanitas",
    dates: "Apr 2019 - Sep 2022",
  },
];

export default function Education() {
  return (
    <div className="education-box">
      <h3 className="title">Education</h3>
      <div className="education">
        {education.map((item) => (
          <div id={education.id} className="education-detail">
            <div className="education-row">
              <div className="education-title">{item.title}</div>
              <div className="education-school">{item.school}</div>
            </div>
            <div className="education-dates">{item.dates}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
