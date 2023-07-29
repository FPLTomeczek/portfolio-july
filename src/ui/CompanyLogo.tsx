import pk from "../assets/images/logos/pk.png";
import sollers from "../assets/images/logos/sollers.jpg";
import { Company } from "../enums/companies";

export const CompanyLogo = ({ company }: { company: Company | string }) => {
  if (company === Company.SOLLERS) {
    return (
      <img
        className="w-8 h-8 rounded-full absolute top-[25px] left-[-60px] z-10"
        src={sollers}
        alt="sollers-consulting"
      />
    );
  }

  if (company === Company.PK) {
    return (
      <img
        className="w-8 h-8 rounded-full absolute top-[25px] left-[-60px] z-10"
        src={pk}
        alt="politechnika-krakowska"
      />
    );
  }
};

export default CompanyLogo;
