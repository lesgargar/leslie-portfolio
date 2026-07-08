import "./home.css";
import Hero from "../../components/sections/hero/Hero";
import Contact from "../../components/sections/contact/Contact";
import Experience from "../../components/sections/experience/Experience";
import Projects from "../../components/sections/projects/Projects";
import TechStack from "../../components/sections/techStack/TechStack";

export default function Home() {
  return (
    <div className="home">
      <Hero/>
      <TechStack/>
      <Experience/>
      <Contact/>
    </div>
  )
}