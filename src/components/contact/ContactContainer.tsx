import Hero from "../Hero";

const contacts = [
  {
    value: "tomaszs18m@gmail.com",
    iconClassName: "fa-regular fa-envelope",
    ref: "mailto: tomaszs18m@gmail.com",
  },
  {
    value: "+ 48 739 205 514",
    iconClassName: "fa-solid fa-phone",
    ref: "tel: +48739-205-514",
  },
  {
    value: "LinkedIn",
    iconClassName: "fa-brands fa-linkedin",
    ref: "https://www.linkedin.com/in/tomasz-skrzypiński-7884a2247/",
  },
];

const ContactContainer = () => {
  return (
    <>
      <Hero text="Contact" />
      <div className="flex flex-col md:flex-row gap-6 mt-4">
        {contacts.map((contact) => {
          const { value, iconClassName, ref } = contact;
          return (
            <a
              href={ref}
              className="flex py-6 px-4 border border-secondary-color rounded-2xl items-center gap-4 transition duration-500 hover:bg-secondary-color cursor-pointer contact w-full no-underline"
              target={`${ref.includes("linkedin") ? "_blank" : ""}`}
            >
              <i
                className={`${iconClassName} text-5xl text-grey-400 w-12 contact__icon`}
              />
              <p>{value}</p>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default ContactContainer;
