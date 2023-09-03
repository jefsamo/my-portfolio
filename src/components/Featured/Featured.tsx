import BlockFeatured from "../BlockFeatured/BlockFeatured";
import Project from "../Project/Project";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <BlockFeatured />
      <div className="project">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default Featured;
