import React from "react";
import styled from "styled-components";
import { responsiveHelpers as rh } from "infoquiz/styles/utils";

import { Layout } from "infoquiz/styles/layout";
import { Logo } from "infoquiz/styles/atoms/logo";
import { Label } from "infoquiz/styles/atoms/label";
import { Button } from "infoquiz/styles/atoms/button";

const SignUpWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0 10px 0;
  padding: 15px;
  ${rh.forTabletUp`  
  flex-direction: row;   
  margin: 60px 0 30px 0;
`};
`;

export const SignUp = () => {
  return (
    <Layout headerArrowBackHome footerWavePinkLower>
      <SignUpWrap>
        <Logo />
        <LabelWrap>
          <div>
            <Label>
              <label>Ton prénom :</label>
              <input type="name" placeholder="Ton prénom" name="name"></input>
            </Label>
            <Label>
              <label>Ton mail :</label>
              <input
                type="email"
                placeholder="exemple@blabla.com"
                name="email"
              ></input>
            </Label>
            <Label>
              <label>Ta date de naissance :</label>
              <input type="date" name="datebirth"></input>
            </Label>
          </div>
          <div>
            <Label>
              <label>Ton mot de passe  :</label>
              <input
                type="password"
                placeholder="Mot de passe"
                name="password"
              ></input>
            </Label>
            <Label>
              <label>Confirme ton mot de passe :</label>
              <input
                type="password"
                placeholder="Mot de passe"
                name="confirmpassword"
              ></input>
            </Label>
          </div>
        </LabelWrap>
        <Button>Créer mon compte</Button>
      </SignUpWrap>
    </Layout>
  );
};
