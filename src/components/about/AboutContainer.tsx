import Hero from "../Hero";
import About from "./About";
import Hobbies from "./Hobbies";

const AboutContainer = () => {
  return (
    <section className="mt-8">
      <Hero text="About" />
      <div className="md:flex md:justify-center md:items-center mt-4">
        <About />
        <Hobbies />
      </div>
    </section>
  );
};

export default AboutContainer;
