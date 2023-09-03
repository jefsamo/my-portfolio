import ReachMe from "../ReachMe/ReachMe";
import "./extra.css";

const Extra = () => {
  return (
    <div className="extra">
      <div className="extra-left">
        <div className="name-card">
          <div className="name-card-content">
            <p className="firstname">Olawale</p>
            <p className="lastname">Shopeyin</p>
          </div>
        </div>
        <div className="extra-bottom">1</div>
      </div>
      <div className="extra-right">
        <div className="box">
          <ReachMe />
          <br />
          <ReachMe />
        </div>
      </div>
    </div>
  );
};

export default Extra;
