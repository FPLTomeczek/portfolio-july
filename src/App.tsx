import { useState } from "react";
import AboutContainer from "./components/about/AboutContainer";
import ContactContainer from "./components/contact/ContactContainer";
import ExperienceContainer from "./components/experience/ExperienceContainer";
import HeaderCard from "./components/HeaderCard";
import ProjectsContainer from "./components/projects/ProjectsContainer";
import Skills from "./components/skills/Skills";
import Navbar from "./layout/components/Navbar";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpeningModal = (value: boolean) => {
    setIsModalOpen(value);
  };

  return (
    <>
      <Modal
        isModalOpen={isModalOpen}
        handleOpeningModal={handleOpeningModal}
      />
      <div className="px-4 max-w-7xl mx-auto mb-8">
        <Navbar handleOpeningModal={handleOpeningModal} />
        <HeaderCard />
        <AboutContainer />
        <Skills />
        <ExperienceContainer />
        <ProjectsContainer />
        <ContactContainer />
      </div>
    </>
  );
}

export default App;
