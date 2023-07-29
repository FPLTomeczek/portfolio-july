const ProjectIcons = ({
  githubLink,
  liveLink,
}: {
  githubLink: string;
  liveLink: string;
}) => {
  return (
    <div className="flex gap-4 mt-4">
      <a href={githubLink} className="flex flex-col items-center no-underline">
        <i className="fa-brands fa-github bg-gradient-to-r from-secondary-color to-accent-color rounded-full p-2 text-black text-4xl"></i>
        <p className="text-xs text-grey-200">Github</p>
      </a>
      <a href={liveLink} className="flex flex-col items-center no-underline">
        <i className="fa-solid fa-arrow-up-right-from-square bg-gradient-to-r from-secondary-color to-accent-color rounded-full p-2 text-black text-4xl"></i>
        <p className="text-xs text-grey-200">Demo</p>
      </a>
      <div className="flex flex-col items-center">
        <i className="fa-brands fa-react bg-gradient-to-r from-secondary-color to-accent-color rounded-full p-2 text-black text-4xl"></i>
        <p className="text-xs text-grey-200">React</p>
      </div>
    </div>
  );
};

export default ProjectIcons;
