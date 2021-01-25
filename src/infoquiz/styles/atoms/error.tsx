import Styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { Color } from "infoquiz/styles/consts";

export const Error = Styled.div`
  font-size:12px;
  margin:4px;
  color:${Color.pink};
    ${rh.forTabletUp`font-size:16px   margin:6px;`} 
`;
