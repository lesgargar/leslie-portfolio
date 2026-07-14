import "./download.css";

const resumes = [
  {
    language: "English",
    file: "/files/resume-eng.pdf",
  },
  {
    language: "Español",
    file: "/files/resume-esp.pdf",
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
