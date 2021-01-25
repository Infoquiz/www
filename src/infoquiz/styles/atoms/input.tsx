import React from "react";
import Styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";

const Wrap = Styled.div`
  margin: 10px 0;
  & > input {
  ::placeholder {
  color:  #807a7a;
  font-size: 14px;
  ${rh.forTabletUp`font-size: 18px;`};
  }
    width: 100%;
    transition: ease 0.1s;
    background-color: rgba(128, 123, 123, 0.07);
    margin-top: 5px;
    border: 2px solid rgba(204,198,198,0.5);
    border-radius: 6px;
    padding: 10px 15px;
    ${rh.forTabletUp`padding: 14px 19px; margin-top:10px`};
    &:focus {
      transition: ease 0.1s;
      background-color: $turquoise;
      border: 1px solid #555;
    }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: all 0s 50000s;
  }
  }
  & > label {
    font-size: 14px;
    ${rh.forTabletUp`font-size: 18px;`};
  }`;

export const Input = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};
