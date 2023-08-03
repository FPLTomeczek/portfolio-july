import { motion } from "framer-motion";

const CircleTeamwork = () => {
  return (
    <motion.div
      className={`hidden sm:flex absolute w-24 h-24 rounded-full bg-grey-400 top-[-70px] left-20 justify-center items-center -z-10`}
      initial={{ transform: "scale(1)" }}
      animate={{ transform: "scale(1.2)" }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: 0.5,
        repeatType: "reverse",
      }}
    >
      Teamwork
    </motion.div>
  );
};

export default CircleTeamwork;
