import "./profesionalExp.css";

const experience = [
  {
    id: 1,
    position: " Web developer ",
    company: "Bichokun",
    dates: "Nov 2025 - Jun 2026",
    location: "Mexico",
    description: `
    Developed and updated the company website using React, Tailwind CSS, and JavaScript, ensuring a seamless and
    informative user experience. 
    Redesigned the menu section to enhance product presentation, significantly improving overall user interface (UI)
    and user experience (UX). 
    Implemented promotional features aligned with business strategies to drive sales growth and boost customer loyalty.
        `,
  },
  {
    id: 2,
    position: "Mobile developer (React Native)",
    company: "Freelance",
    dates: "May 2024 - Apr 2025",
    location: "Remote",
    description: `
    Developed interactive and scalable mobile interfaces with React Native and TypeScript, consistently applying
    responsive design principles. 
    Translated Figma designs into functional code, ensuring high visual fidelity and strict UX/UI consistency. 
    Styled components using NativeWind (Tailwind CSS), optimizing development time and code maintainability. 
    Integrated multi-language support (i18n) to enhance accessibility and reach a broader global user base. 
    Collaborated within an Agile environment with 3-4-week sprints, actively participating in code reviews, functional
    testing, and sprint planning.
        `,
  },
  {
    id: 3,
    position: "Customer Service",
    company: "Hertz",
    dates: "May 2023 - Jul 2024",
    location: "Mexico",
    description: `I managed up to 95 daily agreements during high season, making sure the correct registration and charges in system, strengthening my data handling and attention to details. 
        Solved complex incidences with customers, appliying assertive communication and stress contol to keep service standars under pressure. 
        Check and documentation of vehicle returning process, including damage detection and charge management, improving the validation of information and compliance with procedures. `,
  },
];

export default function ProfesionalExperience() {
  return (
    <div className="profesional-box">
      <h3 className="title">Profesional Experience</h3>
      <div className="profesional">
       {experience.map((item)=>(
         <div key={experience.id} className=" experience-box">
          <div className="head">
            <div>
              <div className="position title">{item.position}</div>
              <div className="title">{item.company}</div>
            </div>

            <div>
              <div className="flex-end title">{item.dates}</div>
              <div className="flex-end title">{item.location}</div>
            </div>
          </div>
          <div className="description">
            {item.description}
          </div>
        </div>
       ))}

      </div>
    </div>
  );
}
