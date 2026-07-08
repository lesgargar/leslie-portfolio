import './stack.css';
import stack from '../../../data/stack.js';

export default function TechStack() {
  return (
    <section className="container" id="techStack">
      <div className="stack">
        <h2 className="title">Stack</h2>
        <div className="skills">
          {stack.map((item) => (
            <div className='skill-detail'>
              <div key={item.label} className="contenedor-fondo ">
                <img src={item.url} alt={item.label} />
              </div>
              <div>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
