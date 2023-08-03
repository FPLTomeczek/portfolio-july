import { navbarList } from "../../data/navbarList";

const Navbar = ({
  handleOpeningModal,
}: {
  handleOpeningModal: (value: boolean) => void;
}) => {
  return (
    <nav className="flex justify-between items-center">
      <h1 className="text-2xl ">
        FPL
        <span className="text-secondary-color font-bold">Tomeczek</span>
      </h1>

      <i
        className="fa-solid fa-bars text-2xl md:!hidden"
        onClick={() => handleOpeningModal(true)}
      ></i>
      <ul className="hidden md:flex gap-8">
        {navbarList.map((item) => (
          <a href={`#${item.id}`} className="no-underline" key={item.id}>
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
