const Hero = ({ text }: { text: string }) => {
  return (
    <>
      <h2
        className="text-4xl bg-white/[.10] w-fit my-0 mx-auto pt-1 pb-3 px-4 rounded-[4rem] relative hero"
        id={`${text}-heading`}
      >
        {text}
      </h2>
    </>
  );
};

export default Hero;
