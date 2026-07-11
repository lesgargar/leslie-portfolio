import { Link } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar({ isOpen, onClose, items }) {
  return (
    <>
      <aside className={`sidebar ${isOpen? "open slide-down":""}`} >
        <button className="icon-button close" onClick={onClose}>
          <img
            className="icon"
            src="https://res.cloudinary.com/duaoa6n1z/image/upload/v1783362723/myportfolio/tache_azdtim.png"
            alt="Close"
          />
        </button>

        <ul>
            {items.map((item)=>
                <li key={item.label} onClick={onClose}>
               
                    <Link to={item.to}>{item.label}</Link>
                    
                </li>
            )}
            
        </ul>
      </aside>
    </>
  );
}
