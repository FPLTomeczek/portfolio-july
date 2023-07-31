import Hero from "../Hero";

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
              className="bg-gradient-to-r from-secondary-color to-accent-color text-center rounded-lg py-2 text-xs"
              key={skill}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
