import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import waveBlue from "infoquiz/assets/img/wave-landing.svg";
import wavePinkLower from "infoquiz/assets/img/wave-register.svg";
import wavePinkHigh from "infoquiz/assets/img/wave-choice.svg";

const Wave = Styled.div`
  display: flex;
  width: 100vw;
  & > img {
    width: 100%;
  }
`;

export const Footer = ({
  footerWaveBlue,
  footerWavePinkLower,
  footerWavePinkHigh,
}: {
  footerWaveBlue: boolean;
  footerWavePinkLower: boolean;
  footerWavePinkHigh: boolean;
}): JSX.Element => {
  const [state, setstate] = useState("");

  useEffect(() => {
    if (footerWaveBlue) {
      setstate(waveBlue);
    } else if (footerWavePinkLower) {
      setstate(wavePinkLower);
    } else if (footerWavePinkHigh) {
      setstate(wavePinkHigh);
    }
  }, [footerWaveBlue, footerWavePinkHigh, footerWavePinkLower]);

  return (
    <Wave>
      <img src={state} alt="vague" />
    </Wave>
  );
};
