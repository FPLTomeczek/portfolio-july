import { jobsHistory } from "../../data/jobsHistory";
import LineAxis from "../../ui/LineAxis";
import Experience from "./Experience";

const ExperienceContainer = () => {
  return (
    <div className="flex flex-col gap-4 relative">
      {jobsHistory.map((job, index) => {
        const { company, date, desc } = job;
        return (
          <Experience company={company} date={date} desc={desc} key={index} />
        );
      })}
      <LineAxis />
    </div>
  );
};

export default ExperienceContainer;
