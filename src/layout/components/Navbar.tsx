const navbarList = [
  { id: "About-heading", name: "About" },
  { id: "Skills-heading", name: "Skills" },
  { id: "Experience-heading", name: "Experience" },
  { id: "Projects-heading", name: "Projects" },
  { id: "Contact-heading", name: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <h1 className="text-2xl ">
        FPL
        <span className="text-secondary-color font-bold">Tomeczek</span>
      </h1>

      <i className="fa-solid fa-bars text-2xl md:!hidden"></i>
      <ul className="hidden md:flex gap-8">
        {navbarList.map((item) => (
          <a href={`#${item.id}`} className="no-underline">
            <li className="hover:text-secondary-color cursor-pointer">
              {item.name}
            </li>
          </a>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
