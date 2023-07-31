import AboutContainer from "./components/about/AboutContainer";
import ContactContainer from "./components/contact/ContactContainer";
import ExperienceContainer from "./components/experience/ExperienceContainer";
import HeaderCard from "./components/HeaderCard";
import ProjectsContainer from "./components/projects/ProjectsContainer";
import Skills from "./components/skills/Skills";
import Navbar from "./layout/components/Navbar";

function App() {
  return (
    <div className="p-4 max-w-7xl my-0 mx-auto">
      <Navbar />
      <HeaderCard />
      <AboutContainer />
      <Skills />
      <ExperienceContainer />
      <ProjectsContainer />
      <ContactContainer />
    </div>
  );
}

export default App;
