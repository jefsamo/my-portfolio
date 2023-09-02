import Block from "../Block/Block";
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="intro">
          <h1 className="name">Wale Shopeyin</h1>
          <Block />
          <span className="title">Backend</span>
          <h1 className="content">
            Engineer. Who works at the edge of user satisfaction and brand
            ambitions
            <Block />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
