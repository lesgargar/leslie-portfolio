import { useState } from 'react';
import './aboutMe.css';

export default function AboutMe() {
  const [open, setOpen] = useState(false);

  return (
    <div className="about">
      <div className="about-title title">
        <h2>About Me</h2>

        <button className='icon-button btn' onClick={() => setOpen(!open)}>
          {open ? (
            <img
              className="icon"
              src="https://res.cloudinary.com/duaoa6n1z/image/upload/v1783455939/myportfolio/minus_ciufxm.png"
            />
          ) : (
            <img className='icon' src="https://res.cloudinary.com/duaoa6n1z/image/upload/v1783455949/myportfolio/plus_sd3xhf.png" />
          )}
        </button>
      </div>

      {open && (
        <div >
          <p className='about-text'>
                Full-Stack Developer with 2+ years of experience delivering scalable web and mobile solutions using React, React
                Native, Flask, and SQLAlchemy. I blend technical proficiency in JavaScript, Python, SQL, and REST APIs with strong
                analytical, problem-solving, and bilingual (English/Spanish) communication skills honed through background in
                operations and customer service.
          </p>
        </div>
      )}
    </div>
  );
}
