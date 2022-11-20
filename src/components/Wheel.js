import React from "react";

const Wheel = (props) => {
  return (
    <div className="container">
      <div
        className="outer-circle"
        id="outer-circle"
        onClick={props.onhandleRotate}
      >
        <span id="menu-btn" className="menu-btn" onClick={props.onMenuClick}>
          Menu
        </span>
        <img
          id="play-pause-btn"
          className="play-pause-btn"
          src="https://www.pngall.com/wp-content/uploads/5/Pause-Button-Transparent.png"
          alt="play-pause-btn"
        />
        <img
          id="prev-btn"
          className="prev-btn"
          src="https://img.icons8.com/ios-glyphs/30/000000/rewind.png"
          alt="play-pause-btn"
        />
        <img
          id="next-btn"
          className="next-btn"
          src="https://img.icons8.com/ios-glyphs/30/000000/end--v1.png"
          alt="play-pause-btn"
        />
        <div
          id="inner-circle"
          className="inner-circle"
          onClick={props.handleInnerCirlceClick}
        ></div>
      </div>
    </div>
  );
};

export default Wheel;
