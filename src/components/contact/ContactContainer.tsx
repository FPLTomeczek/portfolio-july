import { motion } from "framer-motion";

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
        {contacts.map((contact, index) => {
          const { value, iconClassName, ref } = contact;
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: 2, delay: index, ease: "linear" },
                scale: { duration: 0.5, delay: index, ease: "linear" },
              }}
              className=" py-6 px-4 border border-secondary-color rounded-2xl transition duration-500 hover:bg-secondary-color cursor-pointer contact w-full"
              key={contact.value}
            >
              <a
                href={ref}
                className="flex items-center gap-4 no-underline"
                target={`${ref.includes("linkedin") ? "_blank" : ""}`}
              >
                <i
                  className={`${iconClassName} text-5xl text-grey-400 w-12 contact__icon`}
                />
                <p>{value}</p>
              </a>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default ContactContainer;
