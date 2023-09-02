import LocationAndTime from "../LocationAndTime/LocationAndTime";
import "./tools.css";
import RightLogo from "/arrow-right.png";

const Tools = () => {
  return (
    <div className="tools">
      <LocationAndTime />
      <div className="grid-container">
        <div className="grid-item">
          <h1 className="name">
            Wale <span className="surname">Shopeyin</span>
          </h1>
          <p className="title">Back-end Engineer</p>
          <p className="description">
            I work as a Back-end engineer at Interswitch. I like to build things
            from behind the scenes, I like working with designers and developers
            alike.
          </p>
          <div className="pronunciation">
            <p>
              Pronounced ~ <span className="pronounced">Show-kpe-yin</span>
            </p>
          </div>
        </div>
        <div className="grid-item-diff">
          <div className="grid-item-diff-content">
            <div className="upper">
              <div className="empty-space"></div>
              <div className="bottom">
                <p className="location">Lagos, NG</p>
                <p className="sigh">
                  Lagos is a pretty crazy place, good thing I hardly step out
                </p>
              </div>
            </div>
            <div className="lower">
              <div className="reach-out">
                <p className="reach">Reach out to me</p>
                <p>Hi@shopeyinwale@gmail.com</p>
              </div>
              <div className="go">
                <img src={RightLogo} alt="Right Arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <p className="surname">Languages/DB/Frameworks</p>
          <div className="tools-content">
            <div className="tools-left">
              <p>Javascript</p>
              <p>Typescript</p>
              <p>Node.js</p>
              <p>Nest.js</p>
              <p>Express.js</p>
            </div>
            <div className="tools-right">
              <p>Javascript</p>
              <p>Typescript</p>
              <p>Node.js</p>
              <p>Nest.js</p>
              <p>Express.js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
