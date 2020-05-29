import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import waveBlue from "infoquiz/assets/img/wave-landing.svg";
import wavePinkLower from "infoquiz/assets/img/wave-register.svg";

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
}: {
  footerWaveBlue: boolean;
  footerWavePinkLower: boolean;
}): JSX.Element => {
  const [state, setstate] = useState("");

  useEffect(() => {
    if (footerWaveBlue) {
      setstate(waveBlue);
    } else if (footerWavePinkLower) {
      setstate(wavePinkLower);
    }
  }, [footerWaveBlue, footerWavePinkLower]);

  return (
    <Wave>
      <img src={state} alt="vague" />
    </Wave>
  );
};
