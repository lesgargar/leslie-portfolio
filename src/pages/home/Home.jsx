import "./home.css";
import Hero from "../../components/sections/hero/Hero";
import Contact from "../../components/sections/contact/Contact";
import Experience from "../../components/sections/experience/Experience";
import Projects from "../../components/sections/projects/Projects";

export default function Home() {
  return (
    <div className="home">
      <Hero/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}