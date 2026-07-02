import './hero.css';

export default function Hero() {
  return (
    <div>
      <div className="hero-top">
        <div>
          <h4 className="greeting">Hello, My Name is</h4>
          <h1 className="name">Leslie Garcia</h1>
          <h3 className="title">I build things for the web.</h3>
        </div>
        <div className="photo-container slide-down">
          <img
            className="profile-image slide-up"
            src="https://res.cloudinary.com/duaoa6n1z/image/upload/v1783016683/myportfolio/profileImage_vqlmtq.png"
            alt="Profile Image"
          />
        </div>
      </div>
    </div>
  );
}
