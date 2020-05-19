import React from "react";
import Styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { Color } from "infoquiz/styles/consts";

const LogoInfoquiz = Styled.div`
 ${rh.forPortraitTabletUp`font-size: 28px;`}
  font-family: "Poppins";
  font-weight:800;
  font-size: 22px;
  & > p {
    & > span{ 
      color: ${Color.pink}
  } 
}
`;
export const Logo = () => {
  return (
    <LogoInfoquiz>
      <p>
        infoqui<span>z</span>
      </p>
    </LogoInfoquiz>
  );
};
