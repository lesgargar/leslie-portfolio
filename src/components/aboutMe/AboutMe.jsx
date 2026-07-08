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
          <p>
            I am a full-stack developer with experience in React, React Native,
            and Flask. My previous experience in administration, customer
            service, analysis, and problem-solving allows me to contribute
            precision, bilingual communication, and adaptation to dynamic
            environments.
          </p>
        </div>
      )}
    </div>
  );
}
