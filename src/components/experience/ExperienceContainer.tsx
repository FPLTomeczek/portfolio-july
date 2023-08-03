import { useEffect, useRef } from "react";
import { jobsHistory } from "../../data/jobsHistory";
import LineAxis from "../../ui/LineAxis";
import Hero from "../Hero";
import Experience from "./Experience";
import { useAnimation } from "framer-motion";

const ExperienceContainer = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start((i) => ({
            opacity: 1,
            transition: { delay: i * 2 },
          }));
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls]);

  return (
    <section className="mt-8" ref={containerRef}>
      <Hero text="Experience" />
      <div className="flex flex-col gap-4 relative mt-4 mx-auto md:max-w-xl">
        {jobsHistory.map((job, index) => {
          return (
            <Experience
              key={index}
              index={index}
              controls={controls}
              {...job}
            />
          );
        })}
        <LineAxis />
      </div>
    </section>
  );
};

export default ExperienceContainer;
