
import { Link, useParams } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

   let company = companies.find((el) => el.slug === companySlug);

  return (
    <div className="linkBox" key={company.name}>
      <p>{company.name}</p>
      <p>{company.website}</p>
      <p>{company.description}</p>
      <img src={company.logo} style={{ width: "5rem" }} alt="" />
      {company.techStack.map((el) => (
        <Link to={`/tech/${el.slug}`} key={el.id}>
          {el.name}
        </Link>

      ))}
    </div>
  );

}

export default CompanyPage;
