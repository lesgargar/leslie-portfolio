import "./skills.css";

const skillsList = [
  "Javascript",
  "Typescript",
  "React.js",
  "React Native",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Tailwind",
  "Figma",
  "GitHub",
  "Git",
  "JSON WebToken (JWT)",
  "Restful APIs",
  "Expo",
  "SQLAlchemy",
  "SQL",
  "Python",
  "Flask",
  "Jest",
];

export default function Skills() {
  return (
    <div className="skills-box">
      <h3 className="title">Skills</h3>
      <div className="skills-resume">
        {skillsList.map((skill)=>(
            <div>-{skill}</div>
        ))}
      </div>
    </div>
  );
}
