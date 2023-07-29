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
];
const Skills = () => {
  return (
    <section className="mt-8">
      <Hero text="Skills" />
      <div className="grid grid-cols-2 gap-4 bg-primary-color-dark rounded-lg py-6 px-12 mt-4">
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
