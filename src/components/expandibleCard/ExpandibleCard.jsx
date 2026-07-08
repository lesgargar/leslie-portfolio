import { useState } from 'react';
import './expandibleCard.css';

export default function ExpandibleCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <img src="https://picsum.photos/500/250" alt="" />

      <div className="card-body">
        <h2>Proyecto Ecommerce</h2>

        <button onClick={() => setOpen(!open)}>
          {open ? 'Ocultar' : 'Ver detalles'}
        </button>

        {open && (
          <div className="details">
            <p>React + Node + PostgreSQL + JWT + Stripe</p>

            <a href="#">Ver proyecto</a>
          </div>
        )}
      </div>
    </div>
  );
}
