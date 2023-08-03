const About = () => {
  return (
    <div>
      <div className="bg-primary-color-dark px-4 py-8 rounded-md max-w-lg mx-auto">
        <p>
          Hello, my name is <b className="text-secondary-color">Tomek</b> and I
          am programming for several years. Firstly I was learning mainly Java,
          Python (Django framework), but in 2022 I decided that web development
          is the thing I really love to do.
        </p>
        <p className="mt-3">
          I like to combine the <b className="text-secondary-color">Frontend</b>{" "}
          with <b className="text-secondary-color">Backend</b> and have control
          about the both layers. I am constantly learning by creating projects
          (now I’m keen on{" "}
          <a className="text-secondary-color" href="#Projects-heading">
            FPLTools
          </a>{" "}
          one), adding new features and libraries to them. I am fast learner and
          I really want to have opportunity to show my skills in commercial
          project.
        </p>
      </div>
    </div>
  );
};

export default About;
