import React from "react";
import Styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { Color } from "infoquiz/styles/consts";

const Wrap = Styled.div`
  margin: 10px 0;
  & > input {
  ::placeholder {
  color: ${Color.grey};
  font-size: 14px;
  ${rh.forTabletUp`font-size: 18px;`};
  }
    width: 100%;
    transition: ease 0.1s;
    background-color: ${Color.darkWhite};
    margin-top: 5px;
    border: 2px solid ${Color.mediumGrey} ;
    border-radius: 6px;
    padding: 10px 15px;
    ${rh.forTabletUp`padding: 14px 19px; margin-top:10px`};
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: all 0s 50000s;
  }
  }
`;

export const Input = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};
