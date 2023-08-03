import { motion } from "framer-motion";

const CirclePassion = () => {
  return (
    <motion.div
      className={`hidden sm:flex absolute w-24 h-24 rounded-full bg-secondary-color left-[-90px] bottom-[20px]  justify-center items-center -rotate-[30deg] -z-10`}
      initial={{ transform: "scale(1) rotate(-30deg)" }}
      animate={{ transform: "scale(1.2) rotate(-30deg)" }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
    >
      Passion
    </motion.div>
  );
};

export default CirclePassion;
