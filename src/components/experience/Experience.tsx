import { Job } from "../../data/jobsHistory";
import CompanyLogo from "../../ui/CompanyLogo";
import Triangle from "../../ui/Triangle";

const Experience = ({ company, date, desc }: Job) => {
  return (
    <div className="bg-primary-color-dark rounded-2xl p-2 ml-16 relative ">
      <h2 className="text-2xl font-bold leading-6">{company}</h2>
      <span className="text-sm text-grey-400">{date}</span>
      <p className="text-sm">{desc}</p>
      <Triangle />
      <CompanyLogo company={company} />
    </div>
  );
};

export default Experience;
