import "./profesionalExp.css";

const experience = [
  {
    id: 1,
    position: "Operations Specialist & Web developer ",
    company: "Bichokun",
    dates: "Nov 2025 - Jun 2026",
    location: "Mexico",
    description: `
        I Provided bilingual customer service and follow-up in English and Spanish, ensuring high satisfaction and retention. 
        Managed end-to-end sales processes, including order processing, quotes, and cross-functional coordination. 
        Redesigned and updated the menu to enhance product presentation to optimize customer experience.
        Supported the implementation of strategic promotions designed to boost revenue and foster customer loyalty. 
        Managed and controlled store inventory and supplies to ensure optimal stock levels and minimize waste. 
        Developed the frontend of the website, delivering clear information of the store for users.`,
  },
  {
    id: 2,
    position: "Mobile developer (React Native)",
    company: "Freelance",
    dates: "May 2024 - Apr 2025",
    location: "Remote",
    description: `I developed mobile interfaces in React Native with TypeScript and NativeWind, according to the Figma designs in a insurance quote app. 
        Implemented i18n in order to have multi language support for different users. 
        I worked in an agile environment with sprints every 3-4 weeks, participating in advances reviews and new tasks planning to ensure quality delivery.`,
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
