import Hero from "../Hero";

const contacts = [
  { value: "tomaszs18m@gmail.com", iconClassName: "fa-regular fa-envelope" },
  { value: "+ 48 739 205 514", iconClassName: "fa-solid fa-phone" },
  { value: "LinkedIn", iconClassName: "fa-brands fa-linkedin" },
];

const ContactContainer = () => {
  return (
    <>
      <Hero text="Contact" />
      <div className="flex flex-col gap-6 mt-4">
        {contacts.map((contact) => {
          return (
            <div className="flex py-6 px-4 border border-secondary-color rounded-2xl items-center gap-4">
              <i
                className={`${contact.iconClassName} text-5xl text-grey-400 w-12`}
              />
              <p>{contact.value}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContactContainer;
