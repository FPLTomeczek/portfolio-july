import ExperienceContainer from "./components/experience/ExperienceContainer";
import HeaderCard from "./components/HeaderCard";
import Hero from "./components/Hero";
import ProjectsContainer from "./components/projects/ProjectsContainer";
import Skills from "./components/skills/Skills";
import Navbar from "./layout/components/Navbar";

function App() {
  return (
    <div className="p-4">
      <Navbar />
      <HeaderCard />
      <Hero text="Skills" />
      <Skills />
      <ExperienceContainer />
      <ProjectsContainer />
    </div>
  );
}

export default App;
