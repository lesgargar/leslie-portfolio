import "./navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
      <h3>LGG.</h3>
      <div className="nav-links">
         <p>Experience</p>
         <p>Projects</p>
         <p>Contact</p>
         <p>Resume</p>
      </div>
      <button className="nav-button">Contact</button>
     
    </div>
  )
}