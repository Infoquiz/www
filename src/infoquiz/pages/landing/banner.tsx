import React from "react";
import Styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { Button } from "infoquiz/styles/atoms/button";
import bannerImage from "infoquiz/assets/illustrations/banner-image.svg";

const BannerContainer = Styled.div`

${rh.forTabletUp`
`} 
`;
const TextContainer = Styled.div`
&>h1{
font-size: 36px;
line-height: 54px;
}
${rh.forTabletUp`
`} 
`;

export const Banner = () => {
  return (
    <BannerContainer>
      <TextContainer>
        <h1>C’est l’heure de faire un infoquiz !</h1>
        <Button>
          <a href="/levelchoice">C'est parti !</a>
        </Button>
      </TextContainer>
      <img src={bannerImage} alt="" />
    </BannerContainer>
  );
};
