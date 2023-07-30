const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <h1 className="text-2xl ">
        FPL
        <span className="text-secondary-color font-bold">Tomeczek</span>
      </h1>

      <i className="fa-solid fa-bars text-2xl md:!hidden"></i>
      <ul className="hidden md:flex gap-8">
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
