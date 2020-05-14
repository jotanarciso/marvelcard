import React from "react";
import "./style.css";
import MarvelBookAnimationGif from './img/marvel-book-animation.gif'

export const Intro = (props) => {
  const Background = () => {
    return (
      <>
        <div className={"overlay fade-out"}></div>
        <img
          alt="marvel book animation"
          src={MarvelBookAnimationGif}
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
