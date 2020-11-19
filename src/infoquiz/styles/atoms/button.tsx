import React from "react";
import Styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { Color } from "infoquiz/styles/consts";

const ButtonBasic = Styled.div`
  width: 220px;
   font-size: 14px;
   border:none;
   text-align: center;
   margin: 20px;
   color:${Color.lightGrey};
   background-color: ${Color.pink};
   padding: 10px 20px;
   border-radius: 10px;
   font-weight:600;
   cursor:pointer;
   &>a{
      text-decoration: none;
      color:${Color.lightGrey} ;
     }
   ${rh.forMobileUp`
    width: 280px;
    padding: 15px 27px;
    font-size: 16px;`};
    ${rh.forTabletUp`font-size: 18px;`} 
`;

export const Button = ({
  onClick,
  children,
}: {
  onClick?: any;
  children: any;
}) => {
  return <ButtonBasic onClick={onClick}>{children}</ButtonBasic>;
};
