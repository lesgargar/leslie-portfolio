import './navbar.css';
import { screenSize } from '../../hooks/screenSize';
import { useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { isMobile, isTablet } = screenSize();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Experience', to: '/#experience' },
    { label: 'Projects', to: '/#projects' },
    { label: 'Contact', to: '/#contact' },
    { label: 'Resume', to: '/resume' },
  ];

  return (
    <>
      <div className="navbar">
        <Link to={'/'}>LGG.</Link>

        {isMobile || isTablet ? (
          <button className="icon-button" onClick={() => setIsOpen(true)}>
            <img
              className="icon"
              src="https://res.cloudinary.com/duaoa6n1z/image/upload/v1783357011/myportfolio/HamburgPincel_tczzgd.png"
              alt="menu"
            />
          </button>
        ) : (
          <>
            <div className="nav-links">
              {links.map((item) => (
                <Link key={item.label} className="link-item" to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
            <Link to={'/#contact'} className="nav-button link-item">
              Contact
            </Link>
          </>
        )}
      </div>

      {isMobile ||
        (isTablet && (
          <Sidebar
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            items={links}
          />
        ))}
    </>
  );
}
