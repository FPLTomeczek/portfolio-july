import { AnimationControls, motion } from "framer-motion";

import { Job } from "../../data/jobsHistory";
import CompanyLogo from "../../ui/CompanyLogo";
import Triangle from "../../ui/Triangle";

interface ExperienceProps extends Job {
  index: number;
  controls: AnimationControls;
}

const Experience = ({
  company,
  date,
  desc,
  index,
  controls,
}: ExperienceProps) => {
  const isIndexEven = index % 2 === 0 ? true : false;
  return (
    <motion.div
      custom={index}
      className={`flex ${isIndexEven ? "md:justify-end" : "md:justify-start"}`}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 1, delay: index * 2 }}
    >
      <div
        className={`bg-primary-color-dark rounded-2xl p-4 ml-16 relative md:w-1/2 md:ml-0 ${
          isIndexEven ? "md:left-11" : "md:right-11"
        }`}
      >
        <h2 className="text-2xl font-bold leading-6">{company}</h2>
        <span className="text-sm text-grey-400">{date}</span>
        <p className="text-sm">{desc}</p>
        <Triangle direction={isIndexEven ? "left" : "right"} />
        <CompanyLogo
          company={company}
          direction={isIndexEven ? "left" : "right"}
        />
      </div>
    </motion.div>
  );
};

export default Experience;
