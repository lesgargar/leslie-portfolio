import { useState } from 'react';
import './expandibleCard.css';

export default function ExpandibleCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`card ${open && "card-open"}`}>
      <img className="card-img" src={project.img} alt={project.label} />

      <div className="card-body">
        <div className="card-title">
          <h2 className="title"> {project.label}</h2>

          <button className="icon-button" onClick={() => setOpen(!open)}>
            {open ? (
              <img
                className="icon"
                src="https://res.cloudinary.com/duaoa6n1z/image/upload/v1783455939/myportfolio/minus_ciufxm.png"
                alt="-"
              />
            ) : (
              <img
                className="icon"
                src="https://res.cloudinary.com/duaoa6n1z/image/upload/v1783455949/myportfolio/plus_sd3xhf.png"
                alt="+"
              />
            )}
          </button>
        </div>

        {open && (
          <div className="details">
            <p>{project.detail}</p>
            <a
              className="button"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
