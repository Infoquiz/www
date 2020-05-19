import React from "react";
import Styled from "styled-components";
import waveImage from "infoquiz/assets/img/wave-landing.svg";

const Wave = Styled.div`
  display: flex;
  width: 100vw;
  & > img {
    width: 100%;
  }
`;

export const Footer = () => {
  return (
    <Wave>
      <img src={waveImage} alt="" />
    </Wave>
  );
};
