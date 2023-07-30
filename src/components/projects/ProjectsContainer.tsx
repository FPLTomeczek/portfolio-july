import { projects } from "../../data/projects";
import Hero from "../Hero";
import ProjectIcons from "./ProjectIcons";
import { IProject } from "../../data/projects";

const ProjectsContainer = () => {
  return (
    <section className="mt-8">
      <Hero text="Projects" />
      {projects.map((project) => (
        <Project {...project} key={project.name} />
      ))}
    </section>
  );
};

const Project = ({ name, desc, img, github, live }: IProject) => {
  const githubLinkFPLTools = projects.find(
    (project) => project.name === "FPLTools"
  )?.github;
  const liveLinkFPLTools = projects.find(
    (project) => project.name === "FPLTools"
  )?.live;

  const formattedDesc = desc
    .replace(
      "GITHUB",
      `<a href="${githubLinkFPLTools}" target="_blank">GITHUB</a>`
    )
    .replace("LIVE", `<a href="${liveLinkFPLTools}" target="_blank">LIVE</a>`)
    .replace(
      "https://gymate-iota.vercel.app",
      '<a href=https://gymate-iota.vercel.app target="_blank">https://gymate-iota.vercel.app</a>'
    )
    .replace("\n", "<br/>")
    .replace("e-mail", "<b>e-mail</b>")
    .replace("password", "<b>password</b>");

  return (
    <div
      className={`bg-primary-color-dark pt-2 px-4 pb-8 mb-8 rounded-xl flex flex-col items-center ${
        name === "FPLTools" ? "mt-4" : ""
      }`}
    >
      <h2 className="text-2xl font-bold">{name}</h2>
      <div className="w-[280px] h-[300px] overflow-hidden rounded-lg mt-2 relative">
        <img
          src={img}
          alt="project"
          className={`w-100 object-cover absolute left-0 bottom-[-1395px] hover:bottom-0 ${name}-img `}
        />
      </div>
      <ProjectIcons githubLink={github} liveLink={live} />
      <p
        className="text-center mt-4 max-w-[280px] leading-6"
        dangerouslySetInnerHTML={{ __html: formattedDesc }}
      ></p>
    </div>
  );
};

export default ProjectsContainer;
