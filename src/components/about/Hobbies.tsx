const Hobbies = () => {
  return (
    <div className="grid grid-cols-2 w-48 mt-4 gap-4 max-h-[200px] mx-auto md:mx-0 md:mt-0 md:ml-8">
      <div className="flex justify-center items-center h-fit">
        <i className="fa-solid fa-laptop text-5xl w-fit p-4 rounded-md bg-secondary-color"></i>
      </div>
      <div className="flex justify-center items-center h-fit">
        <i className="fa-regular fa-futbol text-5xl w-fit p-4 rounded-md bg-secondary-color before:w-[60px] before:flex before:justify-center"></i>
      </div>
      <div className="flex justify-center items-center h-fit">
        <i className="fa-solid fa-dumbbell text-5xl w-fit p-4 rounded-md bg-secondary-color"></i>
      </div>
      <div className="flex justify-center items-center h-fit">
        <i className="fa-solid fa-gamepad text-5xl w-fit p-4 rounded-md bg-secondary-color"></i>
      </div>
    </div>
  );
};

export default Hobbies;
