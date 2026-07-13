import "./download.css";

const resumes = [
  {
    language: "English",
    file: "/files/leslieG-fullstackDev-Eng.pdf",
  },
  {
    language: "Español",
    file: "/files/leslieG-fullstackDev-Esp.pdf",
  },
];

export default function DownloadResume() {

  return (
    <div className="download">
      <h3 className="title">Download CV:</h3>
      <div className="buttons">
      {resumes.map((resume) => (
        
          <a
            className="button"
            href={resume.file}
            download={`Leslie-Garcia-Resume-${resume.language}.pdf`}
          >
            {resume.language}
          </a>
       
      ))}
       </div>
    </div>
  );
}
