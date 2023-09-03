import { Link } from "react-router-dom";
import Arrow from "/arrow-right-2.png";
import ProjectPicture from "/Frame.png";
import "./project.css";

const Project = () => {
  const role = "<Backend Engineer />";
  return (
    <div className="grid-project">
      <div className="project-item-first">
        <p className="project-name">Lith</p>
      </div>
      <div className="project-item-second">
        <div className="link-bar">
          <Link to="">View on Github</Link>
          <img src={Arrow} alt="" />
        </div>
        <div className="link-bar-2">
          <Link to="">View live site</Link>
          <img src={Arrow} alt="" />
        </div>
        <div className="role-container">
          <p className="from">2022-2023</p>
          <p className="role">{role} </p>
          <p className="role-desc">
            Worked as a backend developer to build and create a p2p system that
            works for the floating of the Naira enabling seamless user
            transactions.
          </p>
        </div>
      </div>
      <div className="project-item-third">
        <img src={ProjectPicture} alt="" />
      </div>
    </div>
  );
};

export default Project;
