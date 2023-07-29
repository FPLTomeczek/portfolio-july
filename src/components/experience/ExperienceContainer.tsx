import { jobsHistory } from "../../data/jobsHistory";
import LineAxis from "../../ui/LineAxis";
import Hero from "../Hero";
import Experience from "./Experience";

const ExperienceContainer = () => {
  return (
    <section className="mt-8">
      <Hero text="Experience" />
      <div className="flex flex-col gap-4 relative mt-4">
        {jobsHistory.map((job, index) => {
          const { company, date, desc } = job;
          return (
            <Experience company={company} date={date} desc={desc} key={index} />
          );
        })}
        <LineAxis />
      </div>
    </section>
  );
};

export default ExperienceContainer;
