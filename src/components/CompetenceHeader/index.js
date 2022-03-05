import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CompetenceHeaderWrapper from "./CompetenceHeaderWrapper";

const CompetenceHeader = ({ icon, header }) => {
  return (
    <CompetenceHeaderWrapper>
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <header>{header}</header>
    </CompetenceHeaderWrapper>
  );
};

export default CompetenceHeader;
