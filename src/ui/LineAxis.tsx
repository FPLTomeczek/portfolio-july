import { motion } from "framer-motion";

const LineAxis = () => {
  return (
    <motion.div
      whileInView={{ height: "100%" }}
      initial={{ height: "0" }}
      transition={{ duration: 8 }}
      viewport={{ once: true }}
      className="line-axis"
    ></motion.div>
  );
};

export default LineAxis;
