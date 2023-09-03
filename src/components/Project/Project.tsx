import { Link } from "react-router-dom";
import Arrow from "/arrow-right-2.png";
import ProjectPicture from "/frame.png";
import "./project.css";

const Project = () => {
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
        <div className="link-bar space">
          <Link to="">View live site</Link>
          <img src={Arrow} alt="" />
        </div>
      </div>
      <div className="project-item-third">
        <img src={ProjectPicture} alt="" />
      </div>
    </div>
  );
};

export default Project;
