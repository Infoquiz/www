import React from "react";
import Styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { questions } from "infoquiz/assets/data/homepage";

const ContainerText = Styled.div`
display:flex;
flex-direction:column;
&>h2{
  font-weight: 600;
  font-size: 22px;
  margin: 12px;

}
&>p{
  font-size: 16px;
  margin: 0px 12px;
}
${rh.forTabletUp`
&>h2{
  font-size: 36px;
  margin: 22px;}
&>p{
  font-size: 18px;
  margin: 0px 22px
}`} 
`;

const Container = Styled.div`
margin-bottom:75px;
${rh.forTabletUp`
margin-bottom:110px;
}`} 
`;

const QuestionBannerContiner = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
margin:20px;
&>img{
width:90px;
}
${rh.forTabletUp`
flex-direction:row;
align-items:initial;
text-align:start;
&>img{
width:129px;
}`} `;

const ReponseBannerContiner = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
margin:20px;
&>img{
height:186px;
}
&>p{
  font-size: 16px;
  line-height: 27px;
  padding-top:12px
}
${rh.forTabletUp`
&>p{
  width:250px;
  font-size: 18px;
}`} `;

const ReponsesBannerContiner = Styled.div`
display:flex;
flex-direction:column;
${rh.forTabletUp`
flex-direction:row;
justify-content: space-between;
`}
`;

export const QuestionBanner = () => {
  return (
    <>
      <>
        {questions.map((question, index) => {
          return (
            <Container>
              <QuestionBannerContiner key={index}>
                <img src={question.image} alt="personnage" />
                <ContainerText>
                  <h2>{question.question}</h2>
                  <p>{question.response}</p>
                </ContainerText>
              </QuestionBannerContiner>
              <ReponsesBannerContiner>
                {questions[index].reponses.map((reponse, index) => {
                  return (
                    <ReponseBannerContiner key={index}>
                      <img src={reponse.image} alt="personnage" />
                      <p>{reponse.text}</p>
                    </ReponseBannerContiner>
                  );
                })}
              </ReponsesBannerContiner>
            </Container>
          );
        })}
      </>
    </>
  );
};
