import { projects } from "../../data/projects";
import ProjectIcons from "./ProjectIcons";

const ProjectsContainer = () => {
  return (
    <>
      {projects.map((project) => (
        <Project {...project} />
      ))}
    </>
  );
};

const Project = ({
  name,
  desc,
  img,
}: {
  name: string;
  desc: string;
  img: string;
}) => {
  const githubLink = projects.find(
    (project) => project.name === "FPLTools"
  )?.github;
  const liveLink = projects.find(
    (project) => project.name === "FPLTools"
  )?.live;

  const formattedDesc = desc
    .replace("GITHUB", `<a href="${githubLink}" target="_blank">GITHUB</a>`)
    .replace("LIVE", `<a href="${liveLink}" target="_blank">LIVE</a>`)
    .replace(
      "https://gymate-iota.vercel.app",
      '<a href=https://gymate-iota.vercel.app target="_blank">https://gymate-iota.vercel.app</a>'
    )
    .replace("\n", "<br/>")
    .replace("e-mail", "<b>e-mail</b>")
    .replace("password", "<b>password</b>");

  return (
    <div className="bg-primary-color-dark pt-2 px-4 pb-8 mt-8 rounded-xl flex flex-col items-center">
      <h2 className="text-2xl font-bold">{name}</h2>
      <div className="max-w-[260px] max-h-[300px] overflow-hidden rounded-lg mt-2">
        <img src={img} alt="project" className="w-100 object-cover" />
      </div>
      <ProjectIcons />
      <p
        className="text-center mt-4 max-w-[260px] leading-6"
        dangerouslySetInnerHTML={{ __html: formattedDesc }}
      ></p>
    </div>
  );
};

export default ProjectsContainer;
