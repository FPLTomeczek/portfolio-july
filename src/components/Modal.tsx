import { navbarList } from "../data/navbarList";
import { motion } from "framer-motion";

const modalVariants = {
  open: { x: "0%" },
  closed: { x: "100%" },
};

const Modal = ({
  isModalOpen,
  handleOpeningModal,
}: {
  isModalOpen: boolean;
  handleOpeningModal: (value: boolean) => void;
}) => {
  return (
    <motion.div
      className="w-full h-screen fixed z-20 bg-primary-color-dark"
      initial="closed"
      animate={isModalOpen ? "open" : "closed"}
      variants={modalVariants}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-end p-4">
        <i
          className="fa-solid fa-xmark text-2xl"
          onClick={() => handleOpeningModal(false)}
        ></i>
      </div>
      <ul className="flex flex-col gap-8 justify-center items-center h-4/6">
        {navbarList.map((item) => (
          <a
            href={`#${item.id}`}
            key={item.id}
            className="no-underline"
            onClick={() => handleOpeningModal(false)}
          >
            <li className="hover:text-secondary-color cursor-pointer text-3xl">
              {item.name}
            </li>
          </a>
        ))}
      </ul>
    </motion.div>
  );
};

export default Modal;
