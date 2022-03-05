import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CompetenceBottomWrapper from "./CompetenceBottomWrapper";

const CompetenceBottom = ({ label, img }) => {
  return (
    <CompetenceBottomWrapper>
      <div className="list">
        <label>{label}</label>

        <div className="list-img">
          <FontAwesomeIcon icon={img} />

          {/* <img src={img} /> */}
        </div>
      </div>
    </CompetenceBottomWrapper>
  );
};

export default CompetenceBottom;
