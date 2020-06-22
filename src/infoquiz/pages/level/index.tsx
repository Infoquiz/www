import React from "react";
import styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { Color } from "infoquiz/styles/consts";

import { Layout } from "infoquiz/styles/layout";
import { Button } from "infoquiz/styles/atoms/button";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Question = styled.p`
  margin: 15px;
  width: 100%;
  border: 3px solid;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  padding: 10px 0;
  border-color: ${Color.pink};
  ${rh.forTabletUp` font-size: 18px;  margin: 50px;`};
`;

const Answer = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  & > input {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transform: scale(2);
    margin: 20px;
  }
  & > label {
    font-size: 14px;
    ${rh.forTabletUp`font-size: 22px;`};
    ${rh.forMobileUp` font-size: 18px;`};
  }
`;

const Answers = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 200px;
  ${rh.forTabletUp`  width:100%;
`};
`;

export const Level = () => {
  return (
    <Layout headerLevel footerWavePinkZigzag>
      <Wrap>
        <Question>En quelle année a été crée internet ?</Question>
        <Answers>
          <Answer>
            <input type="radio"></input>
            <label>1930 </label>
          </Answer>
          <Answer>
            <input type="radio"></input>
            <label>1728 </label>
          </Answer>
          <Answer>
            <input type="radio"></input>
            <label>1907 </label>
          </Answer>
          <Answer>
            <input type="radio"></input>
            <label>1983 </label>
          </Answer>
          <Answer>
            <input type="radio"></input>
            <label>1929 </label>
          </Answer>
          <Answer>
            <input type="radio"></input>
            <label>1950 </label>
          </Answer>
        </Answers>

        <Button>Question suivante</Button>
      </Wrap>
    </Layout>
  );
};
