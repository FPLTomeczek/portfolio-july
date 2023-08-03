import pk from "../assets/images/logos/pk.png";
import sollers from "../assets/images/logos/sollers.jpg";
import { Company } from "../enums/companies";

function getImage(company: string) {
  switch (company) {
    case Company.SOLLERS:
      return sollers;
    case Company.PK:
      return pk;
    default:
      return "s";
  }
}

export const CompanyLogo = ({
  company,
  direction,
}: {
  company: Company | string;
  direction: string;
}) => {
  const img = getImage(company);

  return (
    <img
      className={`brand-logo brand-logo-${direction}`}
      src={img}
      alt={company}
    />
  );
};

export default CompanyLogo;
