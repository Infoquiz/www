import React from "react";
import Styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";
import { Label } from "infoquiz/styles/atoms/label";

const RecomendationContainer = Styled.div`

${rh.forTabletUp`
`} 
`;

export const Recomendation = () => {
  return (
    <RecomendationContainer>
      <div>
        <h2>Je recommande infoquiz</h2>
        <div>
          <p>
            À une personne qui à tendance à dire “je comprends rien aux
            ordinateurs moi”
          </p>
          <p>À un professeur ou gérant d’école.</p>
          <p>À cette personne en soif d’apprentisage.</p>
        </div>
        <Label>email@email.fr</Label>
      </div>
      <img src="" alt="" />
    </RecomendationContainer>
  );
};
