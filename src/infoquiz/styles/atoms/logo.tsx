import React from "react";
import Styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { Color } from "infoquiz/styles/consts";

const LogoInfoquiz = Styled.div`
  font-weight:800;
  margin-left:5px;
  font-size: ${(props) => (props.bigLogo ? "26px" : "22px")};
  color:black;
 ${rh.forTabletUp`${(props) =>
   props.bigLogo ? "font-size:36px" : "font-size:28px"}`}
 & > p {
    & > span{ 
      color: ${Color.pink}
    } 
   }
`;

export const Logo = ({ bigLogo }: { bigLogo?: boolean }) => {
  return (
    <LogoInfoquiz bigLogo={bigLogo}>
      <p>
        infoqui<span>z</span>
      </p>
    </LogoInfoquiz>
  );
};
