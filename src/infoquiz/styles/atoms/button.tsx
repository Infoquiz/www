import React from "react";
import Styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { Color } from "infoquiz/styles/consts";

const ButtonBasic = Styled.button`
   width: 100%;
   font-size: 14px;
   text-align: center;
   margin: 5px 0;
   color: ${(props) => (props.fill ? Color.lightGrey : Color.pink)} ;
   background-color: ${(props) => (props.fill ? Color.pink : "transparent")};
   border:${(props) =>
     props.fill ? "transparent" : `${Color.pink} solid 3px`};
   padding: 12px 0px;
   border-radius: 6px;
   font-weight:600;
   cursor:pointer;
   &>a{
      text-decoration: none;
      color:${Color.lightGrey} ;
     }
   ${rh.forMobileUp`
    font-size: 16px;`};
    ${rh.forTabletUp`font-size: 18px;  margin: 10px 0;`} 
    
`;

export const Button = ({
  onClick,
  children,
  type,
  fill,
}: React.PropsWithChildren<{
  onClick?: () => void;
  type?: string;
  fill?: boolean;
}>) => {
  return (
    <ButtonBasic onClick={onClick} type={type} fill={fill}>
      {children}
    </ButtonBasic>
  );
};
