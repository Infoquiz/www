import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { Color } from "infoquiz/styles/consts";

import { Layout } from "infoquiz/styles/layout";
import { Button } from "infoquiz/styles/atoms/button";

import { GetQuestionApi } from "infoquiz/services";

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
  let { level } = useParams();

  const LEVEL_MAP = {
    beginner: "DEBUTANT",
    intermediate: "INTERMEDIAIRE",
    expert: "EXPERT",
  };

  const [questions, setQuestions] = useState<Record<string, any>[] | null>(
    null
  );

  const [question_index, setQuestionindex] = useState(0);
  useEffect(() => {
    GetQuestionApi(level).then((resp) => {
      setQuestions(resp);
    });
  }, [level]);

  return questions ? (
    <Layout headerLevel footerWavePinkZigzag level={LEVEL_MAP[level]}>
      <Wrap>
        {questions.map((question, index) => {
          return index === question_index ? (
            <React.Fragment key={index}>
              <Question>{question.question}</Question>
              <Answers>
                {question.answers.map((answer, index) => (
                  <React.Fragment key={index}>
                    <Answer key={index}>
                      <input type="radio"></input>
                      <label>{answer.answer}</label>
                    </Answer>
                  </React.Fragment>
                ))}
              </Answers>
            </React.Fragment>
          ) : null;
        })}
        <Button onClick={() => setQuestionindex(question_index + 1)}>
          Question suivante
        </Button>
      </Wrap>
    </Layout>
  ) : (
    <Layout headerLevel footerWavePinkZigzag>
      <Wrap>
        <div>Loading</div>
      </Wrap>
    </Layout>
  );
};
