import Hero from "../Hero";
import Perks from "./Perks";

const skillsList = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Java",
  "English",
  "Redux",
  "Vitest",
  "RTL",
  "React Query",
];
const Skills = () => {
  return (
    <section className="mt-8">
      <Hero text="Skills" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-12 mt-4 md:px-0">
        {skillsList.map((skill) => {
          return (
            <span
              className="text-center rounded-lg py-2 text-xs linear-gradient-skills"
              key={skill}
            >
              {skill}
            </span>
          );
        })}
      </div>
      <Perks />
    </section>
  );
};

export default Skills;
