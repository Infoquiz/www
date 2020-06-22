import React from "react";
import { Layout } from "infoquiz/styles/layout";
import { Logo } from "infoquiz/styles/atoms/logo";
import styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { Color } from "infoquiz/styles/consts";
import lock from "infoquiz/assets/img/lock-open.svg";

const Text = styled.p`
  font-size: 16px;
  margin: 30px 50px;
  ${rh.forPortraitTabletUp`    font-size: 20px;
;`}
  ${rh.forLandscapeTabletUp`  
  padding: 22px;
`}
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vh;
`;
const LevelWrap = styled.div`
  width: 45%;

  ${rh.forPortraitTabletUp`  
    width: 100%;

`}
`;
const Level = styled.div`
  & > a {
    text-decoration: none;
    color: ${Color.lightGrey};
  }
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin: 15px 0;
  padding: 10px;

  ${rh.forPortraitTabletUp`    font-size: 20px;
  padding: 15px;
  margin: 10px 0;`}

  ${rh.forLandscapeTabletUp`  
  padding: 15px;
  margin: 10px 0;`}
  background: red;
`;
export const LevelChoice = () => {
  return (
    <Layout headerArrowBackHome footerWavePinkHigh>
      <Wrap>
        <Logo />
        <Text>Sélectionne ton niveau :</Text>
        <LevelWrap>
          <Level>
            <a href="/">DEBUTANT</a>
            <img src={lock} alt="lock" />
          </Level>
          <Level>
            <a href="/">INTERMEDIARE</a>
            <img src={lock} alt="lock" />
          </Level>
          <Level>
            <a href="/">EXPERT</a>
            <img src={lock} alt="lock" />
          </Level>
        </LevelWrap>
      </Wrap>
    </Layout>
  );
};
