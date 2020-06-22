import React from "react";
import Styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";

const Wrap = Styled.div`
  margin: 10px ;
  & > input {
    width: 100%;
    transition: ease 0.1s;
    background-color: rgba(46, 196, 182, 0.33);
    border: none;
    margin-top: 5px;
    border: 0.5px solid #555;
    border-radius: 5px;
    padding: 9px 6px;
    &:focus {
      transition: ease 0.1s;
      background-color: $turquoise;
      border: 1px solid #555;
    }
  }
  & > label {
    font-size: 14px;
    ${rh.forTabletUp`font-size: 18px;`};
  }
  `;

export const Label = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};
