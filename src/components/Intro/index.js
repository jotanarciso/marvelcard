import React from "react";
import "./style.css";

export const Intro = (props) => {
  const Background = () => {
    return (
      <>
        <div className={"overlay fade-out"}></div>
        <img
          alt="marvel book animation"
          src="https://66.media.tumblr.com/tumblr_mbha9qWF401qcixnko4_500.gif"
        ></img>
      </>
    );
  };

  return (
    <>
      {props.show && // if show prop is true
        <div id="intro">
          <Background></Background>
        </div>
      }
    </>
  );
};
