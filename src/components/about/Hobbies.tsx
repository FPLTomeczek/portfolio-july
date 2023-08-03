import { useState } from "react";

const hobbies = [
  { name: "Coding", iconClassName: "fa-solid fa-laptop" },
  { name: "Football", iconClassName: "fa-regular fa-futbol" },
  { name: "Gym", iconClassName: "fa-solid fa-dumbbell" },
  { name: "Games", iconClassName: "fa-solid fa-gamepad" },
];

const Hobbies = () => {
  return (
    <div className="grid grid-cols-2 w-48 mt-4 gap-4 max-h-[200px] mx-auto md:mx-0 md:mt-0 md:ml-8">
      {hobbies.map((hobby) => {
        const { name, iconClassName } = hobby;
        return (
          <Hobby name={name} iconClassName={iconClassName} key={hobby.name} />
        );
      })}
    </div>
  );
};

const Hobby = ({
  name,
  iconClassName,
}: {
  name: string;
  iconClassName: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-[92px] h-[80px] flex justify-center items-center relative "
    >
      <div
        className={`absolute transition-transform duration-500 backface-hidden w-[92px] h-[80px] bg-secondary-color flex justify-center items-center rounded-md  ${
          hovered ? "rotate-y-180" : "rotate-y-0"
        }`}
      >
        <i className={`${iconClassName} text-5xl w-fit`}></i>
      </div>
      <div
        className={` absolute transition-transform duration-500 backface-hidden w-full h-full  ${
          hovered ? "rotate-y-0" : "rotate-y-minus-180deg"
        }`}
      >
        <p className="w-full h-full bg-secondary-color-dark rounded-md flex justify-center items-center">
          {name}
        </p>
      </div>
    </div>
  );
};

export default Hobbies;
