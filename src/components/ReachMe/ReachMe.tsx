import RightLogo from "/arrow-right.png";
import "./reachMe.css";

const ReachMe = () => {
  return (
    <div className="lower">
      <div className="reach-out">
        <p className="reach">Reach out to me</p>
        <p>Hi@shopeyinwale@gmail.com</p>
      </div>
      <div className="go">
        <img src={RightLogo} alt="Right Arrow" />
      </div>
    </div>
  );
};

export default ReachMe;
