import codingImg from "../../assets/images/animated/coding-image.webp";
import teamworkImg from "../../assets/images/animated/teamwork-image.webp";
import ImageComponent from "./ImageComponent";

const perks = [
  {
    title: "Versatility",
    text: "I'm versatile and inquisitive person. I like to work not only with frontend, but also backend and databases. My interest in programming goes beyond web development and I believe that general knowledge in programming is relevant.",
    src: codingImg,
  },
  {
    title: "Teamwork",
    text: "I really enjoy working with people. I believe that learning from the more experienced colleagues is the most beneficial for me. I'm friendly person and it is important to me to have good relations with co-workers.",
    src: teamworkImg,
  },
];

const Perks = () => {
  return (
    <div className="hidden md:block w-full h-[700px] relative mt-8">
      {perks.map((perk, index) => {
        return (
          <div
            className={`absolute w-full  ${
              index === 0 ? "top-0" : "right-1 bottom-0"
            }`}
            key={index}
          >
            <ImageComponent key={index} {...perk} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Perks;
