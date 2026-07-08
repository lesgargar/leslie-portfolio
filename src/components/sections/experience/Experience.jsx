import ExpandibleCard from '../../expandibleCard/ExpandibleCard';
import './experience.css';
import projects from '../../../data/projects';

export default function Experience() {
  return (
    <section id="experience" className="container ">
      <div className='experience'>
        <h2 className='title'>Experience</h2>
        <div className='project-cards'>
          {projects.map((project)=>(
            <ExpandibleCard key={project.id} project={project}/>
          ))}

        </div>

      </div>
    </section>
  );
}
